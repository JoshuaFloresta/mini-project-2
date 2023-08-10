import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from './About';
import Home from "./Home";
import ReminderPage from "./Reminder";
import LoginPage from "./LoginPage";
import SignupPage from "./SignUpPage";
import CalculatorPage from "./Calculator";
import HealthLibrary from "./HealthLibrary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/calendar" element={<ReminderPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/health" element={< HealthLibrary/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
