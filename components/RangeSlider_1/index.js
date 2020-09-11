import React, { useState, useEffect, useRef } from "react";

const RangeSlider_1 = (key) => {
  console.log(key);
  const initValue = 0;
  const minRange = 0;
  const maxRange = 2000000;

  const fillPosition = 0;
  const [initRange, setInitRange] = useState(initValue);
  const [newPosition, setNewPosition] = useState(fillPosition);
  const sliderRef = useRef();
  console.log("sliderRef", sliderRef);

  useEffect(() => {
    console.log("useEffect");
    setNewPosition((initRange * 100) / maxRange);
    const slider = document.getElementById(`slider_${key.prop}`);
    const selector = document.getElementsByClassName(`selector_${key.prop}`);
    console.log(initRange);
    console.log(newPosition);
    slider.oninput = () => {
      selector[0].style.left = newPosition + "%";
    };
  }, []);

  //ver el uso de useRef para el segimiento de input
  //asi actualiza mas rapido todo

  const handleChange = (e) => {
    //e.preventDefault();
    setInitRange(e.target.value);
    setNewPosition((initRange * 100) / maxRange);
    console.log(initRange.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1."));
    const slider = document.getElementById(`slider_${key.prop}`);
    const selector = document.getElementsByClassName(`selector_${key.prop}`);

    slider.oninput = () => {
      selector[0].style.left = newPosition + "%";
    };
    //console.log(`"POSICION SELECTOR:" ${key.prop} - ${selector[0].style.left}`);
  };

  return (
    <div className="body">
      <div className="middle">
        <div className="slider-container">
          <span className="bar">
            <span className="fill"></span>
          </span>
          <input
            id={`slider_${key.prop}`}
            type="range"
            min={minRange}
            max={maxRange}
            value={initRange}
            step="100"
            onChange={handleChange}
          />
          <div className={`selector_${key.prop}`}>
            <div className="selectvalue">
              $ {initRange.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1.")}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .body {
            min-height: 50vh;
            padding: 0 10vh;
            margin: 0;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          input {
            top: 20px;
          }

          input::after {
            content: "$2.000.000";
            color: #6a6a6a;
            font-size: 1rem;
            position: absolute;
            left: 72%;
            top: 90%;
          }

          input::before {
            content: "$1.000";
            color: #6a6a6a;
            font-size: 1rem;
            position: absolute;
            left: 2%;
            top: 100%;
          }

          input::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: white;
            transform: translate(0%, 0%);
            cursor: pointer;
            outline: none;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
            transition: 0.3s ease-in-out;
            margin-bottom: 38px;
          }
          input:hover::-webkit-slider-thumb {
            transition: 0.3s ease-in-out;
          }

          input:active::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            box-shadow: 0 0 0 3px rgba(250, 100, 0, 1);
          }

          .middle {
            width: 350px;
            max-width: 500px;
          }
          .slider-container {
            position: relative;
          }

          .slider-container .bar {
            position: absolute;
            z-index: 1;
            left: 10px;
            right: 10px;
            top: 7px;
            height: 6px;
            border-radius: 5px;
            background-color: #bebebe;
            overflow: hidden;
          }

          .slider-container .bar .fill {
            display: block;
            width: ${newPosition}%; //aca tengo q enviar el cambio de la ref
            height: 100%;
            background-color: #fa6400;
          }

          .slider-container input {
            position: relative;
            z-index: 2;
            -webkit-appearance: none;
            margin: 0;
            width: 100%;
            height: 10px;
            border-radius: 5px;
            outline: none;
            background-color: transparent;
          }

          .selector_${key.prop} {
            height: 10px;
            width: 40px;
            position: absolute;
            bottom: 55px;
            left: 0%;
            transform: translateX(-50%);
            z-index: 2;
          }

          .selector_${key.prop} .selectvalue {
            width: 98px;
            height: 30px;
            position: absolute;
            top: 0;
            background: white;
            color: #6a6a6a;
            border-radius: 4px;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
            text-align: center;
            line-height: 2;
            font-size: 14px;
            font-weight: 600;
            font-family: sans-serif;
          }
          .selector_${key.prop} .selectvalue::before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-top: 15px solid rgba(0, 0, 0, 0.2);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            top: 100%;
            left: 20%;
            margin-left: -5px;
            margin-top: 1px;
          }
        `}
      </style>
    </div>
  );
};

export default RangeSlider_1;
