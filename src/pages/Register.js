import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="registerRoot">
      {/* <div className="registerRoot__left"> */}
      <form action="post" className="registerRoot__box">
        <table>
          <tr>
            <td>
              <label htmlFor="">First Name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter your first Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Last Name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter your last Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Father Name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter your Father Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Mother Name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter your Mother Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Phone number:</label>
            </td>
            <td>
              <input type="number" placeholder="Enter your Phone number" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Email:</label>
            </td>
            <td>
              <input type="email" placeholder="Enter your Email" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Select Branch:</label>
            </td>
            <td>
              <select id="branch" name="branch" className="branch">
                <option value="N/A">Select Branch</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Electronics & Communication">
                  Electronics & Communication
                </option>
                <option value="Electrical & Electronics">
                  Electrical & Electronics
                </option>
                <option value="Information Science">Information Science</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Select year:</label>
            </td>
            <td>
              <select id="year" name="year" className="year">
                <option value="N/A">Select year</option>
                <option value="I Year">I</option>
                <option value="II Year">II</option>
                <option value="III Year">III</option>
                <option value="IV Year">IV</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Student Id:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter your ID" className="pass" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Password:</label>
            </td>
            <td>
              <input type="password" placeholder="acb123" className="pass" />
            </td>
          </tr>
          <button>Sign Up</button>
        </table>
      </form>
      {/* </div> */}
    </div>
  );
}

export default Register;
