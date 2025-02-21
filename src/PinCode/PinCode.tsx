import KeyBoard from "../components/KeyBoard.tsx";
import Screen from "../components/Screen.tsx";

const PinCode = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="rounded p-4 shadow" style={{maxWidth: "350px"}}>
        <Screen />
        <KeyBoard />
      </div>
    </div>
  );
};

export default PinCode;