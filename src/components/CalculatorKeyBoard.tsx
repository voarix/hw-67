import { useDispatch } from "react-redux";
import {
  calculateResult,
  calculatorOperation,
  resetCalculator,
} from "../Calculator/CalculatorSlice.ts";

const CalculatorKeyboard = () => {
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "=",
    "0",
    "*",
    "/",
    "C",
  ];
  const dispatch = useDispatch();

  const btnClick = (btn: string) => {
    if (btn === "=") {
      dispatch(calculateResult());
    } else if (btn === "C") {
      dispatch(resetCalculator());
    } else {
      dispatch(calculatorOperation(btn));
    }
  };

  return (
    <div className="row row-cols-4 m-auto g-2">
      {buttons.map((btn) => (
        <div key={btn} className="col">
          <button
            type="button"
            className="btn btn-primary w-100 py-3"
            onClick={() => btnClick(btn)}
          >
            {btn}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CalculatorKeyboard;
