import React, { useState, useEffect } from "react";
import { postText } from "../../services/";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

const Home = (props) => {
  const searchbarPlaceholderText =
    "Emotify is a music search engine based on emotions. Enter any text here to get music based on its emotional content!";

  /**
   * @constant modelStatus {boolean}: model active or not on heroku.
   */
  const [userInput, setInput] = useState(searchbarPlaceholderText);
  const [modelStatus, setModelStatus] = useState(false);

  const searchBarOnClickHandler = () => {
    setInput("");
  };

  const searchBarOnBlurHandler = () => {
    setInput(searchbarPlaceholderText);
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
        const res = await postText("test");
        if (res.status == 200) {
          setModelStatus(true);
        }
      } catch (err) {
        console.error("Model error load", err);
      }
    })();
  }, []);

  return (
    <div className="home">
      <h1 id="title">Emotify</h1>
      <p id="slogan">Enter text. Get music. It's simple.</p>
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
