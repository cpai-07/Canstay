import React from "react";
import "../styles/TotalRooms.css";

function TotalRooms() {
  return (
    <div className="totalRooms">
      <div class="movie-container">
        <label>Choose a Floor:</label>
        <select id="movie">
          <option value="10">First</option>
          <option value="12">Second</option>
          <option value="8">Third</option>
          <option value="9">Fourth</option>
        </select>
      </div>
      <ul class="showcase">
        <li>
          <div class="seat"></div>
          <small>N/A</small>
        </li>

        <li>
          <div class="seat selected"></div>
          <small>Selected</small>
        </li>

        <li>
          <div class="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div class="container">
        <div class="screen"></div>
        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>
        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="row">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>
      </div>
      <p class="text">
        You have selected <span id="count">0</span> rooms.
        {/* <span id="total">0</span> */}
      </p>
    </div>
  );
}

export default TotalRooms;
