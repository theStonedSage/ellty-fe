import React from "react";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
}

const Button: React.FC<IButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      {...rest}
      className="px-[20px] py-[10px] rounded-lg bg-[#FFCE22] my-[15px] w-full text-sm hover:bg-[#FFD84D] transition-colors duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};

export { Button };
