import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth/Auth"
import LandingPage from "./LandingPage/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
