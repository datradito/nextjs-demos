import React, { useState, useEffect, useRef } from "react";

const RangeSlider_2 = () => {
  const initValue = 5000;
  const minRange = 0;
  const maxRange = 10000;
  const fillPosition = 50;
  const [initRange, setInitRange] = useState(initValue);
  //const [newValue, setNewValue] = useState();
  const [newPosition, setNewPosition] = useState(fillPosition);

  useEffect(() => {
    const slider = document.getElementById("slider");
    const selector = document.getElementsByClassName("selector");
    console.log(selector[0].style.left);

    slider.oninput = () => {
      selector[0].style.left = newPosition + "%";
    };

    console.log("useEffect");
    console.log(slider.value);
  });
  console.log(initRange);
  // console.log(newValue);
  console.log(newPosition);

  //ver el uso de useRef para el segimiento de input
  //asi actualiza mas rapido todo

  const handleChange = (e) => {
    e.preventDefault();
    setInitRange(e.target.value);
    setNewPosition((initRange * 100) / maxRange);
  };

  return (
    <div className="body">
      <div className="main">
        <input
          id="slider"
          type="range"
          min={minRange}
          max={maxRange}
          value={initRange}
          onChange={handleChange}
        />
        <div className="selector">
          <div className="selectvalue">{initRange}</div>
        </div>
      </div>
      <style jsx>
        {`
          .body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
          }
          .main {
            width: 60%;
            margin: 24% auto;
            position: relative;
          }
          input {
            -webkit-appearence: none;
            width: 100%;
            height: 7px;
            outline: none;
            border-radius: 3px;
          }

          input::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 48px;
            height: 48x;
            cursor: pointer;
            z-index: 3;
            position: relative;
          }
          .selector {
            height: 104px;
            width: 48px;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
          }

          .selector .selectvalue {
            width: 48px;
            height: 40px;
            position: absolute;
            top: 0;
            background: #ffd200;
            border-radius: 4px;
            text-align: center;
            line-height: 45px;
            font-size: 20px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default RangeSlider_2;

//"${maxRange}"; //label final
//"$ ${minRange}"; //label inicial

// .slider-container .bar {
//   position: absolute;
//   z-index: 1;
//   left: 0;
//   right: 0;
//   top: 7px;
//   height: 10px;
//   border-radius: 5px;
//   background-color: #5c5c5c;
//   overflow: hidden;
// }

// .slider-container .bar .fill {
//   display: block;
//   width: 50%;
//   height: 100%;
//   background-color: #0f9d58;
// }
