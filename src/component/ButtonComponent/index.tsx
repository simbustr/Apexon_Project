import React from "react";

type ButtonComponentProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonComponent = ({
  children,
  onClick,
  className,
}: ButtonComponentProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-[#1140f0] text-white px-5 py-2 hover:bg-[#12ECCA] hover:border-none hover:text-black  rounded-full  border ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
