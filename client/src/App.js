import React, { useState, useRef, useEffect, useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import { AppBar } from './components/AppBar';
import { postText, getRecommendation } from './services/index.js';
import { userContext } from './context/UserProvider';
import { getUserLibrary } from './services/userLibrary';

const App = (props) => {
  /**
   * @constant prediction {obj}: prediction object returned from model.
   * @constant recommendation {obj}: recommendation object returned from spotify API.
   */
  const [prediction, setPrediction] = useState({});
  const [recommendation, setRecommendation] = useState({});
  const [runOnUserLibrary, setRunOnUserLibrary] = useState(false);
  const { userState, dispatch } = useContext(userContext);

  const checkboxCheckedHandler = () => {
    runOnUserLibrary ? setRunOnUserLibrary(false) : setRunOnUserLibrary(true);
  };

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
          let reccoResponse;
          //TODO!!!
          if (runOnUserLibrary) {
            reccoResponse = await getUserLibrary(userState.accessToken);
            console.log(reccoResponse);
            // parse tracks to make query strings and make request for audio features
            // filter tracks
          } else {
            reccoResponse = await getRecommendation(
              predictionResponse.data.emotion
            );
          }
          setRecommendation(reccoResponse.data);
        } catch (err) {
          //console.log('error in onEnter', err);
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
    <div className="App">
      <AppBar />
      <Route
        exact
        path="/"
        render={() => (
          <Home
            onKeyPress={userInputEnteredHandler}
            onCheckboxCheck={checkboxCheckedHandler}
          />
        )}
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
  );
};

export default withRouter(App);
