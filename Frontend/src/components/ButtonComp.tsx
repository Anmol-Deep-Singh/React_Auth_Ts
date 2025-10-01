import type { ReactNode } from "react";

type ButtonProp= {
    type: string;
    color: string;
    mainimage?: ReactNode;
    leftimage?: ReactNode;
    rightimage?: ReactNode;
    text?: string;
}
const ButtonComp:  React.FC<ButtonProp>= ({type,color,leftimage,text}) => {
    const BaseStyle = `flex flex-row items-center justify-center ml-[5px] p-2 
  hover:scale-[1.02] transition-transform duration-200 rounded-[8px] cursor-pointer`;
    switch(type){
        case "A":
            return(
                <button className={`${BaseStyle} h-[32px] w-[110px] text-1.5xs font-[400]`} style={{ backgroundColor: `${color}`}}>
                    <div>{leftimage}</div>
                    <div className="ml-[6px]">{text}</div>
                </button>
            )
        default:
            return(
                <button className={`${BaseStyle} h-[32px] w-[140px] text-1.5xs font-[400]`} style={{ backgroundColor: `${color}`}}>
                    <div className="ml-[6px]">{text}</div>
                </button>
            )   
    }
}

export default ButtonComp