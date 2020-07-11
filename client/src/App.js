import React, { useState, useRef, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import { AppBar } from './components/AppBar';
import { postText, getRecommendation } from './services/index.js';
import { UserProvider } from './context/UserProvider';

const App = (props) => {
  /**
   * @constant prediction {obj}: prediction object returned from model.
   * @constant recommendation {obj}: recommendation object returned from spotify API.
   */
  const [prediction, setPrediction] = useState({});
  const [recommendation, setRecommendation] = useState({});

  /**
   * POST emotion
   * Avoid routing at initial render and till response is received.
   */
  let firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    props.history.push('/search-results');
  }, [prediction, props.history]);

  /**
   * Handles ENTER event. Send fetch request to Emotify-model for prediction object.
   */
  const userInputEnteredHandler = async (event) => {
    if (event.key === 'Enter') {
      const userInput = document.getElementById('searchbar').value;
      if (userInput === '') {
        alert('Please input some text');
      } else {
        event.preventDefault();
        // localStorage.setItem('user-input', event.target.value);
        try {
          const predictionResponse = await postText(event.target.value);
          setPrediction(predictionResponse.data);
          const reccoResponse = await getRecommendation(
            predictionResponse.data.emotion
          );
          setRecommendation(reccoResponse.data);
        } catch (err) {
          if (err.response.status === 413) {
            // Input text is too large (more than 102,386 characters)
            alert('Please enter a shorter piece of text');
          } else {
            alert(err);
            console.error(err);
          }
        }
      }
    }
  };

  return (
    <UserProvider>
      <div className="App">
        <AppBar />
        <Route
          exact
          path="/"
          render={() => <Home onKeyPress={userInputEnteredHandler} />}
        />
        <Route
          exact
          path="/search-results"
          render={() => (
            <SearchResults
              prediction={prediction}
              recommendation={recommendation}
            />
          )}
        />
      </div>
    </UserProvider>
  );
};

export default withRouter(App);
