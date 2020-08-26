import React from "react";
// Styles
import "./Gameboard.css";

const Gameboard = () => {
  return (
    <div>
      <h3>gameboard</h3>

      <canvas id="game-canvas" width="1440px" height="720px"></canvas>
    </div>
  );
};

export default Gameboard;
