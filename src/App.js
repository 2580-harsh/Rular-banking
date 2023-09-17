import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Home from "./Components/Home/Home";
import LocateUs from "./Components/Location/LocateUs";
import ContactUs from "./Components/Contact/ContactUs";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Login" element={<LoginPage/>}/>
      <Route exact path="/Location" element = {<LocateUs/>}/>
      <Route exact path="/Contact" element = {<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
