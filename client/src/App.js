import React, { useState, useRef, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import { postText, getRecommendation } from './services/index.js';

const App = (props) => {
  const [prediction, setPrediction] = useState({});
  const [recommendation, setRecommendation] = useState({});
  /**
   * To implement: Wake model on initial render, then on response, return search bar
   */
  useEffect(() => {}, []);

  /**
   * Handles ENTER event. Send fetch request to Emotify-model.
   */
  const userInputEnteredHandler = async (event) => {
    if (event.key === 'Enter') {
      // localStorage.setItem('user-input', event.target.value);
      try {
        const predictionResponse = await postText(event.target.value);
        setPrediction(predictionResponse.data);
        const reccoResponse = await getRecommendation(
          predictionResponse.data.emotion
        );
        setRecommendation(reccoResponse.data);
      } catch (err) {
        alert(err);
        console.error(err);
      }
    }
  };

  /**
   * POST emotion
   * Avoid routing at initial render till response is received
   */
  let firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    props.history.push('/search-results');
  }, [prediction, props.history]);

  return (
    <div className="App">
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
  );
};

export default withRouter(App);
