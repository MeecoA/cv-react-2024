function Inputs({ type, value, name, handleOnchange }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={handleOnchange}
        name={name}
        autoComplete="true"
      />
    </div>
  );
}

export default Inputs;
