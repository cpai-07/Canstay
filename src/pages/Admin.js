import React from "react";
import "../styles/Admin.css";

function Admin() {
  return (
    <div className="Admin">
      {/* Navbar */}
      <nav class="navbar">
        <ul>
          <li>
            <a href="#">Warden</a>
          </li>
          <li>
            <a href="#contact">Complaints</a>
          </li>
          <li>
            <a href="#about">Leave</a>
          </li>
          <li>
            <a href="/">Student</a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)">Register</a>
            <div class="dropdown-content">
              <a href="#">Student Register</a>
              <a href="#">Room Allocation</a>
              {/* <a href="#">Link 3</a> */}
            </div>
          </li>
          <li className="heading">Canstay</li>
        </ul>
      </nav>
    </div>
  );
}

export default Admin;
