import type { ReactNode, MouseEventHandler } from "react";

type ButtonProp = {
  type: string;
  color: string;
  bordercolor?: string;
  mainimage?: ReactNode;
  leftimage?: ReactNode;
  rightimage?: ReactNode;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;       // single click
  onDoubleClick?: MouseEventHandler<HTMLButtonElement>; // double click
};

const ButtonComp: React.FC<ButtonProp> = ({
  type,
  color,
  bordercolor,
  mainimage,
  leftimage,
  rightimage,
  text,
  onClick,
  onDoubleClick,
}) => {
  const BaseStyle = `flex flex-row items-center justify-center ml-[5px] p-2 
    hover:scale-[1.02] transition-transform duration-200 rounded-[8px] cursor-pointer`;

  switch (type) {
    case "A":
      return (
        <button
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          className={`${BaseStyle} h-[32px] w-[110px] text-xs font-[400]`}
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
          className={`${BaseStyle} h-[32px] w-[110px] text-xs font-[400]`}
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
          className={`${BaseStyle} h-[32px] w-[140px] text-xs font-[400]`}
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
