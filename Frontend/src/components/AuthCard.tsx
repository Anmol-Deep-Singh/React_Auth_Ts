import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from "./ButtonComp"
import InputComp from './InputComp';
import InputBox from "./InputBox"

type AuthCardProp={
  title?: String;
}
const AuthCard: React.FC<AuthCardProp> = () => {
  return (
    <div className="h-full w-1/2 bg-orange-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl h-[39px] w-full text-center">Create your account</h1>
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
      <InputBox
        input={
        <InputComp
          type="password"
          placeholder="Enter password"
          width="w-80"
          height="h-12"
          fontColor="text-red-600"
          bgColor="bg-transaparent"
          border="border-2 border-green-500"
          rounded="rounded-full" // larger rounded
        />
        } error={"Wrong output"}
      />
      <InputBox
        input={
        <InputComp
          type="password"
          placeholder="Enter password"
          width="w-80"
          height="h-12"
          fontColor="text-red-600"
          bgColor="bg-transaparent"
          border="border-2 border-green-500"
          rounded="rounded-full" // larger rounded
        />
        } error={"Wrong output"}
      />
      <InputBox
        input={
        <InputComp
          type="password"
          placeholder="Enter password"
          width="w-80"
          height="h-12"
          fontColor="text-red-600"
          bgColor="bg-transaparent"
          border="border-2 border-green-500"
          rounded="rounded-full" // larger rounded
        />
        } error={"Wrong output"}
      />
      <Button 
        type={"B"}
        color={"var(--main1)"}
        text={"Signin"}
      />
    </div>
  )
}

export default AuthCard