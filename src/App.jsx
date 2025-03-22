import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Country from "./components/Country/index";
import About from "./components/About";
import Footer from "./components/Footer/index";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Header />

      <main className="container__main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country" element={<Country />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
