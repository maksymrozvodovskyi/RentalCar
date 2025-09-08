import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense>
        <Routes></Routes>
      </Suspense>
    </>
  );
}

export default App;
