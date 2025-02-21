const Keypad = () => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<', 'E'];

  return (
      <div className="row row-cols-3 m-auto g-2">
        {buttons.map((btn) => (
          <div key={btn} className="col">
            <button className="btn btn-primary w-100 py-3">{btn}</button>
          </div>
        ))}
      </div>
  );
};

export default Keypad;
