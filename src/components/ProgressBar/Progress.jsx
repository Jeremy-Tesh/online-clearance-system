import React, { useState } from "react";

import ProgressBar from "./ProgressBar";
import "./Progress.css";

const Progress = ({ x }) => {
  console.log(x);
  const [progress, setProgress] = useState(x);
  const [color, setColor] = useState("#4ac9bc");
  const colorArray = [
    "#7ea9e1",
    "#ed004f",
    "#00fcf0",
    "#d2fc00",
    "#7bff00",
    "#fa6900",
  ];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  // const randomProgressValue = () => {
  //   const progressValue = Math.floor(Math.random() * 101);
  //   setProgress(progressValue);
  //   const randomProgressColor = randomColor();
  //   setColor(randomProgressColor);
  // };

  const onChange = (e) => {
    if (e.target.value) {
      if (e.target.value > 100) {
        progress = 100;
      }
      if (e.target.value < 0) {
        progress = 0;
      }
      setProgress(progress);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Clearance progress</h1>
        <ProgressBar
          progress={progress}
          size={200}
          strokeWidth={15}
          circleOneStroke="black"
          circleTwoStroke={color}
        />

        {/* <button onClick={randomProgressValue}>Random</button> */}
      </div>
    </div>
  );
};

export default Progress;
