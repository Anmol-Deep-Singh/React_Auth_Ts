import type { ReactNode, MouseEventHandler } from "react";

type ButtonProp = {
  type?: "submit" | "reset" | "button",
  kind: string;
  color: string;
  bordercolor?: string;
  mainimage?: ReactNode;
  leftimage?: ReactNode;
  rightimage?: ReactNode;
  text?: string;
  height?: string;
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;       
  onDoubleClick?: MouseEventHandler<HTMLButtonElement>; 
};

const ButtonComp: React.FC<ButtonProp> = ({
  type,
  kind,
  color,
  bordercolor,
  mainimage,
  leftimage,
  rightimage,
  text,
  height,
  width,
  onClick,
  onDoubleClick,
}) => {
  const BaseStyle = `flex flex-row items-center justify-center ml-[5px] p-2 
    hover:scale-[1.02] transition-transform duration-200 rounded-[8px] cursor-pointer`;

  switch (kind) {
    // 
    case "A":
      return (
        <button
          type={type}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          className={`${BaseStyle} ${height} ${width} text-xs font-[400]`}
          style={{ backgroundColor: color , borderColor: bordercolor, borderWidth: "2px", borderStyle: "solid" }}
        >
          {leftimage && <div>{leftimage}</div>}
          {mainimage && <div className="mx-[4px]">{mainimage}</div>}
          {text && <div className="ml-[6px]">{text}</div>}
          {rightimage && <div>{rightimage}</div>}
        </button>
      );
    case "B":
      return(
        <button
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          className={`${BaseStyle} ${height} ${width} h-[32px] w-[110px] text-xs font-[400]`}
          style={{ backgroundColor: color, borderColor: bordercolor, borderWidth: "2px", borderStyle: "solid" }}
        >
          {text && <div className="ml-[6px] text-[16px]">{text}</div>}
        </button>
      )
    default:
      return (
        <button
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          className={`${BaseStyle} ${height} ${width} text-xs font-[400]`}
          style={{ backgroundColor: color }}
        >
          {leftimage && <div>{leftimage}</div>}
          {mainimage && <div className="mx-[4px]">{mainimage}</div>}
          {text && <div className="ml-[6px]">{text}</div>}
          {rightimage && <div>{rightimage}</div>}
        </button>
      );
  }
};

export default ButtonComp;
