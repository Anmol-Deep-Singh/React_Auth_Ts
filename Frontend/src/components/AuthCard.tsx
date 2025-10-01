import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from "./ButtonComp"
import InputComp from './InputComp';
import InputBox from "./InputBox"
import { useEffect } from 'react';

type AuthCardProp={
  Auth?: String;
}
const AuthCard: React.FC<AuthCardProp> = ({Auth}) => {
  useEffect(()=>{
    
  },[Auth])
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
            fontColor="text-red-600"
            bgColor="bg-transaparent"
            border="border-2 border-green-500"
            rounded="rounded-[13px]" // larger rounded
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
          fontColor="text-red-600"
          bgColor="bg-transaparent"
          border="border-2 border-green-500"
          rounded="rounded-[17px]" // larger rounded
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
          fontColor="text-red-600"
          bgColor="bg-transaparent"
          border="border-2 border-green-500"
          rounded="rounded-[17px]" // larger rounded
        />
        } error={"Wrong output"}
      />
      <Button 
        type={"B"}
        color={"var(--main1)"}
        text={Auth === 'SignUp' ? "SignUp" : "SignIn"}
      />
    </div>
  )
}

export default AuthCard