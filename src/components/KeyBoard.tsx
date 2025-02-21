import { useDispatch } from "react-redux";
import { addIPinCode, checkPinCode, removeIPinCode, resetPinCode } from "../PinCode/PinCodeSlice.ts";

const KeyBoard = () => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "<", "0", "E"];
  const dispatch = useDispatch();

  const btnClick = (btn: string) => {
    if(btn === '<'){
      dispatch(removeIPinCode());
    } else if(btn === 'E'){
      dispatch(checkPinCode());
      setTimeout(() => dispatch(resetPinCode()), 1000);
    } else {
      dispatch(addIPinCode(btn));
    }
  };

  return (
    <>
      <hr/>
      <div className="row row-cols-3 m-auto g-2">
        {buttons.map((btn) => (
          <div key={btn} className="col">
            <button className="btn btn-primary w-100 py-3" onClick={() => btnClick(btn)}>{btn}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default KeyBoard;
