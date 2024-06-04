import React, { createContext, useState, ReactNode, useEffect } from "react";
import { auth } from "../modules/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

interface ChildrenProps {
  children: ReactNode;
}

interface AuthContextData {
  users: string;
  setUsers: Function;
  authenticated: boolean;
  callAuth: Function;
  logout: Function;
  loading: boolean;
  setLoading: Function;
  loadingAuth: Boolean
  setLoadingAuth: Function
}

const initialState: AuthContextData = {
  users: "",
  setUsers: Function,
  authenticated: false,
  callAuth: Function,
  logout: Function,
  loading: true,
  setLoading: Function,
  loadingAuth: true,
  setLoadingAuth: Function
};

export const AuthContext = createContext<AuthContextData>(initialState);

const AuthProvicer = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState({} as any);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    const recoverUser = localStorage.getItem("user");

    if (recoverUser) {
      setUsers(JSON.parse(recoverUser));
      setAuthenticated(true);
    }

    setInitialLoad(true);
    setLoading(false);
  }, []);

  const callAuth = async (email: string, password: string) => {
    setLoadingAuth(true);
    try {
      const loggedUser = await signInWithEmailAndPassword(auth, email, password);

      if (loggedUser) {
        localStorage.setItem("user", JSON.stringify(loggedUser.user.uid));
        setUsers(loggedUser.user.uid);
        setAuthenticated(true);
        console.log("successfully authenticated");
      }
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  };

  const logout = async () => {
    try {
      setUsers({});
      setAuthenticated(false);
      setLoadingAuth(false);
      localStorage.removeItem("user");
      await signOut(auth);
      console.log("logout");
    } catch (error) {
      console.log(error);
    }
  };

  if (!initialLoad) {
    return (
      <div className="spinner">
        <h1>carregando...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        users,
        setUsers,
        callAuth,
        logout,
        loading,
        setLoading,
        loadingAuth, 
        setLoadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvicer;
