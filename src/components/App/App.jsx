import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CarDetailsPage from "../../pages/CarDetailsPage/CarDetailsPage";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
