import AuthCard from "../components/AuthCard"

const Auth = () => {
  return (
    <>
    <div className="h-screen min-h-screen w-full flex flex-col justify-center items-center top-0 left-0 bg-transp">
      <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] flex flex-row flex-start bg-transparent border-2 border-solid border-blue-600 ">
        <div className="h-full w-1/2 rounded-[0px_150px_100px_0px] bg-blue-100"></div>
        <AuthCard title={"anmol"}/>
      </div>
    </div>
    </>
  )
}

export default Auth