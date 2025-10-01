import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from "./ButtonComp"
import InputBox from "./InputBox"

type AuthCardProp={
  title?: String;
}
const AuthCard: React.FC<AuthCardProp> = () => {
  return (
    <div className="h-full w-1/2 bg-pink-600">
      <h1 className="text-4xl">Create your account</h1>
      <div className="">
        <Button type={"A"} leftimage={<FontAwesomeIcon icon={faGithub}/>}/>
        <Button type={"A"}/>
      </div>
      <h5>Use email for registration</h5>
      <InputBox/>
      <InputBox/>
      <InputBox/>
      <Button type={"B"}/>
    </div>
  )
}

export default AuthCard