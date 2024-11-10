function Inputs({
  type,
  value,
  name,
  handleOnchange,
  placeholder = "Add text here",
}) {
  return (
    <div>
      <input
        className="border-2 shadow-md p-1 rounded m-1 w-80"
        type={type}
        value={value}
        onChange={handleOnchange}
        name={name}
        autoComplete="true"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Inputs;
