import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from "./ButtonComp"
import InputComp from './InputComp';
import InputBox from "./InputBox"
import { useEffect,useRef,useState } from 'react';

type AuthCardProp={
  Auth?: String;
}
const AuthCard: React.FC<AuthCardProp> = ({Auth}) => {
  const inputRefs = useRef([
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]).current;
  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, []);

  useEffect(()=>{
    focusrefresh();
  },[Auth])

  const handleEnter = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      e.preventDefault();
      const active = document.activeElement as HTMLInputElement | null;; 
      const index = inputRefs.findIndex(ref => ref.current === active);
      if (index === -1) return; 
      if (!active?.value.trim()) {
      console.log("Please enter a value before moving on");
      return;
    }
      if (index + 1 === inputRefs.length) {
        console.log("we can submit ");
      } else {
        inputRefs[index + 1].current?.focus();
        console.log("next");
      }
    }
  };
  const focusrefresh=()=>{
    if(Auth === "SignUp"){
      inputRefs[0].current?.focus();
    }else{
      inputRefs[1].current?.focus();
    }
  }
  return (
    <div className="h-full w-1/2 bg-transparent flex flex-col items-center justify-center">
      <h1 className="text-4xl h-[39px] w-full text-center">
        {Auth === 'SignUp'?"Create your account":"Welcome Back"}
        </h1>
      <div className="flex flex-row items-center justify-center my-5">
        <Button 
          type={"A"}
          color={"var(--main3)"}
          leftimage={<FontAwesomeIcon icon={faGithub} className="text-[16px]"/>}
          text={"Github"}
          />
        <Button 
          type={"A"}
          color={"var(--main3)"}
          leftimage={<FontAwesomeIcon icon={faGoogle} className="text-[16px]"/>}
          text={"Google"}
        />
      </div>
      <h5 className='text-[12px] h-[14.5px] w-full text-center'>Or Use email for registration</h5>
      {Auth === 'SignUp'?
        <InputBox
          input={
          <InputComp
            type="text"
            placeholder="Name"
            width="w-80"
            height="h-12"
            fontColor="text-[var(--text2)]"
            bgColor="bg-[var(--inputbox)]"
            border="border-2 border-transparent"
            rounded="rounded-[13px]" // larger rounded
            ref={inputRefs[0]}
          />
          } error={"Wrong output"}
        />: null}
      <InputBox
        input={
        <InputComp
          type="text"
          placeholder="Email"
          width="w-80"
          height="h-12"
          fontColor="text-[var(--text2)]"
          bgColor="bg-[var(--inputbox)]"
          border="border-2 border-transparent"
          rounded="rounded-[17px]" // larger rounded
          ref={inputRefs[1]}
        />
        } error={""}
      />
      <InputBox
        input={
        <InputComp
          type="password"
          placeholder="Password"
          width="w-80"
          height="h-12"
          fontColor="text-[var(--text2)]"
          bgColor="bg-[var(--inputbox)]"
          border="border-2 border-transparent"
          rounded="rounded-[17px]" // larger rounded
          ref={inputRefs[2]}
        />
        } error={"Wrong output"}
      />
      <Button 
        type={"B"}
        color={"var(--main1)"}
        text={Auth === 'SignUp' ? "Sign Up" : "Sign In"}
      />
    </div>
  )
}

export default AuthCard