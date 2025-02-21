import KeyBoard from "../components/KeyBoard.tsx";

const PinCode = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="rounded p-4 shadow" style={{maxWidth: "350px"}}>
        <KeyBoard />
      </div>
    </div>
  );
};

export default PinCode;