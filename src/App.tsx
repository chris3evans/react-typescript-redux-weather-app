import React from "react";
import "./App.css";
import { MainView } from "./views/MainView/MainView";
import { Route, Routes } from "react-router-dom";
import { DetailView } from "./views/DetailView/DetailView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />}></Route>
        <Route path="/detail" element={<DetailView />}></Route>
      </Routes>
    </>
  );
}

export default App;
