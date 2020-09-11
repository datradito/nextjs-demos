import React, { useState, useEffect } from "react";

const minRange = 0;
const maxRange = 100;

const NewComponent = () => {
  const [initRange, setInitRange] = useState(0);
  const [newValue, setNewValue] = useState();
  const [newPosition, setNewPosition] = useState();
  console.log(initRange);
  console.log(newValue);
  console.log(newPosition);

  //ver el uso de useRef para el segimiento de input
  //asi actualiza mas rapido todo

  const handleChange = (e) => {
    setInitRange(e.target.value);
    setNewValue(Number(((initRange - minRange) * 100) / (maxRange - minRange)));
    setNewPosition(10 - newValue * 0.2);
  };

  return (
    <>
      <div className="body">
        <div className="range-wrap">
          <div className="range-value" id="rangeV">
            <span>${initRange}</span>
          </div>

          <input
            id="range"
            type="range"
            min={minRange}
            max={maxRange}
            value={initRange}
            step="1"
            onChange={handleChange}
          />
        </div>
      </div>
      <style jsx>
        {`
          .body {
            min-height: 100vh;
            padding: 0 10vh;
            margin: 0;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          input[type="range"] {
            -webkit-appearance: none;
            margin: 20px 0;
            width: 100%;
          }
          input[type="range"]:focus {
            outline: none;
          }

          input[type="range"]::-webkit-slider-runnable-track {
            height: 6px;
            border-radius: 100px;
            width: 100%;
            //height: 4px;
            cursor: pointer;
            animate: 0.2s;
            background: #fa6400; //color de la barra (track)
            //border-radius: 25px;
          }

          input[type="range"]::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: black; //pelotita (thumb)
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -8px;
          }

          input[type="range"]:focus::-webkit-slider-runnable-track {
            background: red; //color de track en el foco
          }

          .range-wrap {
            width: 500px;
            position: relative;
          }

          .range-value {
            position: absolute;
            top: -50%;
          }

          .range-value {
            left: calc(${newValue}% + ${newPosition}px);
          }

          .range-value span {
            width: 30px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: #03a9f4;
            color: #fff;
            font-size: 12px;
            display: block;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            border-radius: 6px;
          }

          .range-value span:before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-top: 10px solid #03a9f4;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            margin-top: -1px;
          }
        `}
      </style>
    </>
  );
};

export default NewComponent;
