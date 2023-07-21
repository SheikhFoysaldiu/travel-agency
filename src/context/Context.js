// context.js
import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';


const UserContext = createContext();


const ContextProvider = ({ children }) => {
    const [iataID, setIataID] = useState('');
    const [iataCode, setIataCode] = useState('');
    const [iataLogin, setIataLogin] = useState(false);


  return (
    <UserContext.Provider value={{
        iataID,
        setIataID,
        iataCode,
        setIataCode,
        iataLogin,
        setIataLogin
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };