import React, { forwardRef } from "react";

type InputCompProps = {
  type: "text" | "email" | "password";
  placeholder: string;
  width?: string;
  height?: string;
  fontColor?: string;
  border?: string;
  bgColor?: string;
  rounded?: string;
  value?: string;
};

const InputComp = forwardRef<HTMLInputElement, InputCompProps>(
  (
    {
      type,
      placeholder,
      width,
      height,
      fontColor,
      border,
      bgColor,
      rounded,
      value,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}  
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        className={`mt-[10px]
          px-3 outline-none
          font-bold placeholder:font-bold
          ${width ?? ""} ${height ?? ""} ${fontColor ?? ""} ${border ?? ""} ${bgColor ?? ""} ${rounded ?? ""}
        `}
      />
    );
  }
);

export default InputComp;
