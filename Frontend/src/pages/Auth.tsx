import { useState } from "react"
import AuthCard from "../components/AuthCard"
import ButtonComp from "../components/ButtonComp";

const Auth = () => {
  const[Auth,SetAuth] = useState('SignUp');
  return (
    <> 
      <div className="h-screen min-h-screen w-full flex flex-col justify-center items-center top-0 left-0 bg-transparent">
        <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex flex-row flex-start bg-[var(--card)]">
          <div className="h-full w-1/2 rounded-[0px_150px_100px_0px] flex flex-col justify-center items-center bg-[var(--sidecard)] text-[rgb(var(--purple_white))]">
            <h1 className="text-4xl h-[39px] w-full text-center mb-[20px]">Welcome back</h1>
            <p className="mb-[20px]">This is Your Auth System for the Application</p>
            <ButtonComp type={"B"} color={"transparent"} bordercolor={"rgb(var(--purple_white))"}
            text={Auth === 'SignUp' ? "Sign In" : "Sign Up"}
            onClick={Auth === 'SignUp' ?
              ()=>{SetAuth('SignIn')}:
              ()=>{SetAuth('SignUp')}} />
          </div>
          <AuthCard Auth={Auth}/>
        </div>
      </div>     
    </>
  )
}

export default Auth