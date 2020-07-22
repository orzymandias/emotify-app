import React, { createContext, useReducer } from 'react';
export const userContext = createContext();

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, userObject: action.payload };
    case 'SET_TOKEN':
      return { ...state, accessToken: action.payload };
    case 'SAVE_PLAYLISTS':
      return { ...state, userPlaylists: action.payload };
    case 'LOG_OUT':
      return { ...initState };
    default:
      throw new Error('Invalid Action');
  }
};

const initState = {
  userObject: null,
  accessToken: null,
  userPlaylists: null,
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(loginReducer, initState);
  return (
    <userContext.Provider value={{ userState, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
