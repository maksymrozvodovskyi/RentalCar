import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { HomePage } from "../../pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
