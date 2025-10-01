import { useState } from "react"
import AuthCard from "../components/AuthCard"
import ButtonComp from "../components/ButtonComp";

const Auth = () => {
  const[Auth,SetAuth] = useState('SignUp');
  return (
    <>
    {Auth === 'SignUp'? 
      <div className="h-screen min-h-screen w-full flex flex-col justify-center items-center top-0 left-0 bg-transp">
        <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex flex-row flex-start bg-transparent border-2 border-solid border-blue-600 ">
          <div className="h-full w-1/2 rounded-[0px_150px_100px_0px] flex flex-col justify-center items-center bg-pink-500">
            <h1>Welcome back</h1>
            <p>This is a Signup Page</p>
            <ButtonComp type={"B"} color={"var(--main1)"} text={"Signin"} onClick={()=>{SetAuth('SignIn')}}/>
          </div>
          <AuthCard Auth={Auth}/>
        </div>
      </div> :
      <div className="h-screen min-h-screen w-full flex flex-col justify-center items-center top-0 left-0 bg-transp">
        <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex flex-row flex-start bg-transparent border-2 border-solid border-blue-600 ">
          <div className="h-full w-1/2 rounded-[0px_150px_100px_0px] flex flex-col justify-center items-center bg-pink-500">
            <h1>Welcome back</h1>
            <p>This is a Signin Page</p>
            <ButtonComp type={"B"} color={"var(--main1)"} text={"Signup"} onClick={()=>{SetAuth('SignUp')}}/>
          </div>
          <AuthCard Auth={Auth}/>
        </div>
      </div>
    }
    </>
  )
}

export default Auth