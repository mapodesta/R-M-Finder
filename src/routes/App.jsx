import { Route, BrowserRouter, Routes } from "react-router-dom";
import Favourites from "../components/Favourites";
import React from "react";
import Characters from "../components/Characters";
import Layout from "../containers/Layout";
import AppContext from "../context/AppContext";
import useDarkMode from "../hooks/useDarkMode";

export default function App() {
  const darkmode = useDarkMode();
  return (
    <AppContext.Provider value={darkmode}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Characters />} />
            <Route exact path="/favourites" element={<Favourites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
