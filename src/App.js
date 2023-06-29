import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from './EmpListing';
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";
import AboutPage from './About';
import Home from "./Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employee" element={<EmpListing />} />
          <Route path="/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
