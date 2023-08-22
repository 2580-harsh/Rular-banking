import "./App.css";

import login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <div className="header">
        <a className="a" href="">
          About us
        </a>
        <a className="b" href="">
          Investor Corner
        </a>
        <a className="c" href="">
          Interest Rate
        </a>
        <a className="d" href="">
          Service Charge
        </a>
        <a className="e" href="">
          Career
        </a>
      </div>
      <div className="main">
        <div className="left">
          <img src="bggb-logo2.jpg"></img>
        </div>
        <div className="right">
          <div className="dropdown">
            <button className="dropbtn">Agriculture</button>
            <div className="dropdown-content">
              <a href="#">Kisan Credit Card</a>
              <a href="#">Water Harvesting loan</a>
              <a href="#">Dairy Loan</a>
              <a href="#">Farm LOan</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">MSME</button>
            <div className="dropdown-content">
              <a href="#">Prime Minister Emploment Gurantee</a>
              <a href="#">Self employed Credit Card</a>
              <a href="#">Solar Home lighting Scheme</a>
              <a href="#">Microfinance</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Retail</button>
            <div className="dropdown-content">
              <a href="#">Loan Scheme</a>
              <a href="#">Deposit Scheme</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Financial Inclusion</button>
            <div className="dropdown-content">
              <a href="">PMJDY Life Insurance</a>
              <a href="">PMSBY</a>
              <a href="">PMJJBY</a>
              <a href="">APY</a>
              <a href="">Financial Literacy</a>
              <a href="">Rupay Offers</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-between">
        <div className="all">
        <a href="login.js" target="blank" className="first">Internet Banking</a> onclick() ={}
        <div className="Second">Locate Us</div>
        <div className="Third">CALCULATOR</div>
        <div className="Fourth">CONTACT US</div>
        </div>
      </div>
    </div>
  );
}

export default App;
