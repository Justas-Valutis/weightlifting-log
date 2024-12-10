import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(4);
  const [isAdmin, setIsAdmin] = useState(true);

  const login = (user) => {
    setIsLoggedIn(true);
    setUserId(user.userId);
    setIsAdmin(user.isAdmin);
    console.log(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};