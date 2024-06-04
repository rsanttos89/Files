import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AuthProvicer from "../context/auth";
import { AuthContext } from "../context/auth";

import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import Page404 from "../screens/404";

import Tables from "../screens/Tables";
import Dashboard from "../screens/Dashboard";

interface ChildrenProps {children: any}
const RoutesApp = () => {
  const Private = ({children}:ChildrenProps) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return (
        <div className="spinner">
          <h1>Carregando...</h1>
        </div>
      )
    }
    if(!authenticated) {return <Navigate to="/" />}

    return children;
  }

  const PrivateSignIn = ({children}:ChildrenProps) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return (
        <div className="spinner">
          <h1>Carregando...</h1>
        </div>
      )
    }
    if(authenticated) {return <Navigate to="/tables" />}

    return children;
  }
  
  return (
    <BrowserRouter>
      <AuthProvicer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<PrivateSignIn><SignIn /></PrivateSignIn>} />
          <Route path="/*" element={<Page404 />} />

          <Route path="/tables" element={<Private><Tables/></Private>} />
          <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
        </Routes>
      </AuthProvicer>
    </BrowserRouter>
  );
};

export default RoutesApp;