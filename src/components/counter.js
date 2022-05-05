import { useState } from "react";

export const Counter = () => {
  const [val, setVal] = useState(0);

  const dataChange = (num) => {
    if (val === 0 && num < 0) {
      alert("Value should not be negative.");
      return;
    }
    setVal(val + num);
  };
  const double = () => {
    setVal(val * 2);
  };
  return (
    <>
      <div className="cnt">
        Counter: <span className={val % 2 === 0 ? "even" : "odd"}>{val}</span>
      </div>
      <div className="btn">
        <div>
          <button onClick={() => dataChange(1)}>Increase</button>
        </div>
        <div>
          <button onClick={() => dataChange(-1)}>Decrease</button>
        </div>
        <div>
          <button onClick={() => double()}>Double</button>
        </div>
      </div>
    </>
  );
};
