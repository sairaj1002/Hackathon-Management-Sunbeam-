import { createContext, useEffect, useMemo, useState } from "react";

import STORAGE_KEYS from "../constants/storage";

import { mockUsers } from "../mock/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*
   * Restore Session
   */
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem(STORAGE_KEYS.AUTH);

      if (storedAuth) {
        const { user, token } = JSON.parse(storedAuth);
        setUser(user);
        setToken(token);
      }
    } catch (error) {
      console.error("Failed to restore authentication session:", error);

      localStorage.removeItem(STORAGE_KEYS.AUTH);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /*
   * Login
   */
  // const login = ({ user, token }) => {
  //   setUser(user);
  //   setToken(token);

  //   localStorage.setItem(
  //     STORAGE_KEYS.AUTH,
  //     JSON.stringify({
  //       user,
  //       token,
  //     })
  //   );
  // };


    /*
   * Mock Login
   */
    const login = async (email, password) => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      // Fake JWT
      const token = "mock-jwt-token";

      setUser(user);
      setToken(token);

      localStorage.setItem(
        STORAGE_KEYS.AUTH,
        JSON.stringify({
          user,
          token,
        })
      );

      return user;
    };

  /*
   * Logout
   */
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  /*
   * Context Value
   */
  const value = useMemo(
    () => ({
      user,
      token,
      isLoading,
      isAuthenticated: !!token,
      login,
      logout,
    }),
    [user, token, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
