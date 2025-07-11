import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

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