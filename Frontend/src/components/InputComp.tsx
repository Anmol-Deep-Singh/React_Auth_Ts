type InputCompProps = {
  type: "text" | "email" | "password"; // input type
  placeholder: string;                 // placeholder text
  width?: string;                      // width (Tailwind classes)
  height?: string;                     // height (Tailwind classes)
  fontColor?: string;                  // input text color
  border?: string;                     // border style
  bgColor?: string;                    // background color
  rounded?: string;                    // rounding (sm, md, lg, full)
};

const InputComp = ({
  type,
  placeholder,
  width,
  height,
  fontColor,
  border,
  bgColor,
  rounded,
}: InputCompProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`mt-[10px]
        px-3 outline-none
        font-bold placeholder:font-bold
        ${width ?? ""} ${height ?? ""} ${fontColor ?? ""} ${border ?? ""} ${bgColor ?? ""} ${rounded ?? ""}
      `}
    />
  );
};

export default InputComp;
