import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

const Screen = () => {
  const pinCodeValue = useSelector((state: RootState) => state.pinCode.code);
  const statusValue = useSelector((state: RootState) => state.pinCode.status);

  let background = '';

  if (statusValue === "success") {
    background = "bg-success"
  }  else if (statusValue === "waiting") {
    background = "bg-primary"
  } else if (statusValue === "warning") {
    background = "bg-danger"
  }

  return (
    <div style={{height: "50px"}} className={`${background} rounded bg-opacity-75`}>
      {pinCodeValue}
    </div>
  );
};

export default Screen;