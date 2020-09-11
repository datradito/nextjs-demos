const TextGrid = () => {
  return (
    <div className="container">
      <div className="item item--1"> 1: Orange</div>
      <div className="item item--2"> 2: Green</div>
      <div className="item item--3"> 3: Violet</div>
      <div className="item item--4"> 4: Pink</div>
      <div className="item item--5"> 5: Blue</div>
      <div className="item item--6"> 6: Brown</div>
      <style jsx>
        {`
          .container {
            background-color: #eee;
            width: 1000px;
            margin: 30px auto;

            display: grid;
            grid-template-rows: repeat(2, 150px);
            grid-template-columns: repeat(3, 1fr);
             {
              /* grid-template-columns: repeat(2, 150px) 1fr; */
            }
             {
              /* grid-row-gap: 30px;
            grid-column-gap: 30px; */
            }

            grid-gap: 30px;
          }

          .item {
            padding: 20px;
            font-size: 30px;
            font-family: sans-serif;
            color: white;
          }
          .item--1 {
            background-color: orange;

             {
              /* grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 3; */
            }
             {
              /* simply form */
            }
            grid-row: 2 / 3;
            grid-column: 3 / 3;
          }
          .item--2 {
            background-color: green;
          }
          .item--3 {
            background-color: violet;
          }
          .item--4 {
            background-color: pink;
          }
          .item--5 {
            background-color: blue;
          }
          .item--6 {
            background-color: brown;
          }
        `}
      </style>
    </div>
  );
};

export default TextGrid;
