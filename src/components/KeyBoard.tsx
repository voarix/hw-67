import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import { addIPinCode } from "../PinCode/PinCodeSlice.ts";

const KeyBoard = () => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "<", "0", "E"];
  const pinCodeValue = useSelector((state: RootState) => state.pinCode.code);
  const dispatch = useDispatch();

  return (
    <>
      {pinCodeValue}
      <hr/>
      <div className="row row-cols-3 m-auto g-2">
        {buttons.map((btn) => (
          <div key={btn} className="col">
            <button className="btn btn-primary w-100 py-3" onClick={() => dispatch(addIPinCode(btn))}>{btn}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default KeyBoard;
