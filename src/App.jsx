import "./App.css";
import MainLayout from "./Components/Layout/MainLayout";
import Article from "./Components/Pages/Articles/Article";
import Gallery_ from "./Components/Pages/Gallery/Gallery";
import Home from "./Components/Pages/Home/Home";
import Features from "./Components/Pages/Features/Features";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Article />} />
          <Route path="gallery" element={<Gallery_ />} />
          <Route path="feature" element={<Features />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
