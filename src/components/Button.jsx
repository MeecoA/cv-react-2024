function Button({
  handleClick,
  btnText,
  bgColor = "bg-white",
  hoverBgColor = "hover:bg-white",
}) {
  return (
    <div>
      <button
        className={` w-80 border-2 p-1 rounded-md ${bgColor} ${hoverBgColor}`}
        onClick={handleClick}
      >
        {btnText}
      </button>
    </div>
  );
}

export default Button;
