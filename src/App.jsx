import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main className="container__main">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </div>
  );
}
