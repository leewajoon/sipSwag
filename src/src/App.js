import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mypage from "./pages/Mypage";
import TestGames from "./pages/TestGames";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/testgame" element={<TestGames />} />
      </Routes>
    </div>
  );
}

export default App;
