import { createContext, useEffect, useMemo, useState } from "react";

import STORAGE_KEYS from "../constants/storage";

import { mockUsers } from "../mock/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = () => {
    const storedUsers = localStorage.getItem(STORAGE_KEYS.MOCK_USERS);

    if (!storedUsers) return mockUsers;

    try {
      return JSON.parse(storedUsers);
    } catch {
      localStorage.removeItem(STORAGE_KEYS.MOCK_USERS);
      return mockUsers;
    }
  };

  const saveSession = (authenticatedUser) => {
    const token = "mock-jwt-token";

    setUser(authenticatedUser);
    setToken(token);
    localStorage.setItem(
      STORAGE_KEYS.AUTH,
      JSON.stringify({ user: authenticatedUser, token })
    );
  };

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
    const user = getUsers().find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      saveSession(user);

      return user;
    };

  const register = async ({ fullName, email, password }) => {
    const users = getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((existingUser) => existingUser.email === normalizedEmail)) {
      throw new Error("An account already exists for this email address.");
    }

    const newUser = {
      id: crypto.randomUUID(),
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
      role: "PARTICIPANT",
      avatar: "",
      isActive: true,
    };

    localStorage.setItem(STORAGE_KEYS.MOCK_USERS, JSON.stringify([...users, newUser]));
    saveSession(newUser);
    return newUser;
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
      register,
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
