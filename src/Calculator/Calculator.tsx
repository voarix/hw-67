import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import CalculatorKeyBoard from "../components/CalculatorKeyBoard.tsx";

const Calculator = () => {
  const number = useSelector((state: RootState) => state.calculator.number);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="rounded p-4 shadow" style={{ maxWidth: "350px" }}>
        <div style={{ minHeight: "50px" }} className="rounded bg-opacity-75">
          <p
            style={{ minHeight: "20px", wordBreak: "break-all" }}
            className="fs-4 fw-bold text-center letter-spacing-1"
          >
            {number}
          </p>
        </div>
        <CalculatorKeyBoard />
      </div>
    </div>
  );
};

export default Calculator;
