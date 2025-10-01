import type { ReactNode } from "react";

type ButtonProp= {
    type: string;
    mainimage?: ReactNode;
    leftimage?: ReactNode;
    rightimage?: ReactNode;
    text?: string;
}
const ButtonComp:  React.FC<ButtonProp>= ({type}) => {
    switch(type){
        case "A":
            return(
                <button></button>
            )
        default:
            return(
                <button></button>
            )   
    }
}

export default ButtonComp