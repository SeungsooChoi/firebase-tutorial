import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const Router = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />} />
          </>
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </HashRouter>
  );
};

export default Router;