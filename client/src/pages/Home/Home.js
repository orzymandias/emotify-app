import React, { useState, useEffect } from 'react';
import { postText } from '../../services/';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

const Home = (props) => {
  /**
   * @constant modelStatus {boolean}: model active or not on heroku.
   */
  const [userInput, setInput] = useState('How are you feeling today?');
  const [modelStatus, setModelStatus] = useState(false);

  const searchBarOnClickHandler = () => {
    setInput('');
  };

  const searchBarOnBlurHandler = () => {
    setInput('How are you feeling');
  };

  /**
   * Wake model on initial render, then on response, return search bar
   */
  // useEffect(async () => {
  //   try {
  //     const res = await postText('test');
  //     if (res.status == 200) {
  //       setModelStatus(true);
  //     }
  //   } catch (err) {
  //     console.error('Model error load', err);
  //   }
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await postText('test');
        if (res.status == 200) {
          setModelStatus(true);
        }
      } catch (err) {
        console.error('Model error load', err);
      }
    })();
  }, []);

  return (
    <div className="home">
      <h1 id="title">Emotify</h1>
      <SearchBar
        modelStatus={modelStatus}
        placeholderText={userInput}
        onClick={searchBarOnClickHandler}
        onBlur={searchBarOnBlurHandler}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
};

export default Home;
