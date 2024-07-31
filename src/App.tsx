import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./views/dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
