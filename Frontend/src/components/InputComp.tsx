import { forwardRef } from "react";

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
} & React.InputHTMLAttributes<HTMLInputElement>;

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
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}   // ✅ forward the ref properly
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        className={`mt-[10px] px-3 outline-none font-bold placeholder:font-bold
          ${width ?? ""} ${height ?? ""} ${fontColor ?? ""} ${border ?? ""} ${bgColor ?? ""} ${rounded ?? ""}`}
        {...rest}
      />
    );
  }
);

InputComp.displayName = "InputComp"; // ✅ helps TS + React DevTools

export default InputComp;
