/* eslint-disable react/prop-types */

const Button = ({ location, handleClick }) => {
  // handleClick = () => {};

  return (
    <button
      className={`p-3 xl:py-[12px] xl:px-[24px] rounded-[12px] lg:rounded-xl font-bold text-lg ${
        location === "nav"
          ? "bg-orange-600 text-white"
          : "bg-white text-orange-600 font-[500]"
      }`}
      onClick={handleClick}
    >
      Request a Demo
    </button>
  );
};

export default Button;
