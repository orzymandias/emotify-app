import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

const Home = (props) => {
  const [userInput, setInput] = useState('How are you feeling today?');

  const searchBarOnClickHandler = () => {
    setInput('');
  };

  const searchBarOnBlurHandler = () => {
    setInput('How are you feeling');
  };

  return (
    <div className="home">
      <h1 id="title">Emotify</h1>

      <SearchBar
        placeholderText={userInput}
        onClick={searchBarOnClickHandler}
        onBlur={searchBarOnBlurHandler}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
};

export default Home;
