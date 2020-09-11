import { useState } from "react";

const minRange = 0;
const maxRange = 100;

const InputRange = () => {
  const [initRange, setInitRange] = useState(0);
  const [newValue, setNewValue] = useState();
  const [newPosition, setNewPosition] = useState();
  console.log(initRange);
  console.log(newValue);
  console.log(newPosition);

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
            list="tickmarks"
            min={minRange}
            max={maxRange}
            value={initRange}
            step="10"
            onChange={handleChange}
          />
          <div>
            <datalist id="tickmarks" className="datalist">
              <option value="0"></option>
              <option value="10"></option>
              <option value="20"></option>
              <option value="30"></option>
              <option value="40"></option>
              <option value="50"></option>
              <option value="60"></option>
              <option value="70"></option>
              <option value="80"></option>
              <option value="90"></option>
              <option value="100"></option>
            </datalist>
          </div>

          <label className="initLabel">Importe Inicial</label>
          <label className="endLabel">Importe Final</label>
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
          input {
            -webkit-appearance: none;
            margin: 20px 0;
            width: 100%;
            height: 2em;
          }
          input:focus {
            outline: none;
          }

          input:focus::-webkit-slider-runnable-track {
            background: #03a9f4;
          }

          ::ms-ticks-after {
            display: block;
          }
          .datalist {
            display: block;

            -webkit-appearance: listitem;
          }
        `}
      </style>
    </>
  );
};

export default InputRange;

// input::-webkit-slider-thumb {
//   height: 20px;
//   width: 20px;
//   border-radius: 50%;
//   background: #fff;
//   box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
//   cursor: pointer;
//   -webkit-appearance: none;
//   margin-top: -8px;
// }
// input:focus::-webkit-slider-runnable-track {
//   background: #03a9f4;
// }

// .range-wrap {
//   width: 500px;
//   position: relative;
// }
// .range-value {
//   position: absolute;
//   top: -50%;
// }
// .range-value {
//   left: calc(${newValue}% + ${newPosition}px);
// }

// .range-value span {
//   width: 30px;
//   height: 24px;
//   line-height: 24px;
//   text-align: center;
//   background: #03a9f4;
//   color: #fff;
//   font-size: 12px;
//   display: block;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, 0);
//   border-radius: 6px;
// }
// .range-value span:before {
//   content: "";
//   position: absolute;
//   width: 0;
//   height: 0;
//   border-top: 10px solid #03a9f4;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   top: 90%;
//   left: 40%;
//   margin-left: -2px;
//   margin-top: -1px;
// }
