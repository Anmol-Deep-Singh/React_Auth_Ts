import type { ReactNode } from "react";
type InputBoxProp={
  input: ReactNode;
  error: string|null;
}
const InputBox: React.FC<InputBoxProp> = ({input,error}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-[8px]">
      {input}
      <div className="w-full h-[20px] text-left pl-3">
        <span className="text-red-500 text-sm">{error}</span>
      </div>
    </div>
  )
}

export default InputBox