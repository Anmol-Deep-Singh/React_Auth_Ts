import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from "./ButtonComp"
import InputComp from './InputComp';
import InputBox from "./InputBox"
import { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchdata } from '../hooks/fetchdata';
import toast from 'react-hot-toast';
import callToast from '../hooks/callToast';

const URL = "http://localhost:3000/api/auth/"
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;
type AuthCardProp = {
  Auth?: String;
};

const AuthCard: React.FC<AuthCardProp> = ({ Auth }) => {
  const inputRefs = useRef([
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]).current;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // extract refs from register
  const { ref: nameRef, ...nameReg } = register("name", { required: "Name is required" });
  const { ref: emailRef, ...emailReg } = register("email", { required: "Email is required" });
  const { ref: passRef, ...passReg } = register("password", {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 chars" },
  });

  const onSubmit = async (formdata: FormData) => {
    if(Auth === 'SignUp'){
      const promise = fetchdata({
        method:"POST",
        URL:URL+"signup",
        body:formdata,
      })
      callToast({kind:"A",promise:promise})
      const {data,error} = await promise;
      const{token} = data;
      localStorage.setItem("token",token);
      
    }else{
      const promise = fetchdata({
        method:"POST",
        URL:URL+"signin",
        body:formdata,
      })
      callToast({kind:"A",promise:promise})
      const {data,error} = await promise;
      const{token} = data;
      localStorage.setItem("token",token);
    }
    //inputRefs.forEach((Ref,index)=>{if(Ref.current){Ref.current.value = ""}})
  };

  const handleEnter = (e: KeyboardEvent) => {
    const active = document.activeElement as HTMLInputElement | null;
    if (!active) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const index = inputRefs.findIndex(ref => ref.current === active);
      if (index === -1) return;
      if (!active.value.trim()) {
        console.log("Please enter a value before moving on");
        return;
      }
      if (index + 1 === inputRefs.length) {
        (active.form as HTMLFormElement)?.requestSubmit(); 
      } else {
        inputRefs[index + 1].current?.focus();
      }
    }
    if (e.key === "Backspace" && active.value === "") {
      e.preventDefault();
      const index = inputRefs.findIndex(ref => ref.current === active);
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, []);

  useEffect(() => {
    if (Auth === "SignUp") {
      inputRefs[0].current?.focus();
    } else {
      inputRefs[1].current?.focus();
    }
  }, [Auth]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-1/2 bg-transparent flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl h-[39px] w-full text-center">
        {Auth === 'SignUp' ? "Create your account" : "Welcome Back"}
      </h1>

      <div className="flex flex-row items-center justify-center my-5">
        <Button kind={"A"} color={"var(--main3)"}
          leftimage={<FontAwesomeIcon icon={faGithub} className="text-[16px]" />}
          text={"Github"} />
        <Button kind={"A"} color={"var(--main3)"}
          leftimage={<FontAwesomeIcon icon={faGoogle} className="text-[16px]" />}
          text={"Google"} />
      </div>

      <h5 className='text-[12px] h-[14.5px] w-full text-center'>
        Or Use email for registration
      </h5>

      {Auth === 'SignUp' &&
        <InputBox
          input={
            <InputComp
              {...nameReg}
              ref={(el) => {
                nameRef(el);             // ✅ give ref to RHF
                inputRefs[0].current = el; // ✅ keep your own ref
              }}
              type="text"
              placeholder="Name"
              width="w-80"
              height="h-12"
              fontColor="text-[var(--text2)]"
              bgColor="bg-[var(--inputbox)]"
              border="border-2 border-transparent"
              rounded="rounded-[13px]"
            />
          }
          error={errors.name?.message ?? ""}
        />
      }

      <InputBox
        input={
          <InputComp
            {...emailReg}
            ref={(el) => {
              emailRef(el);
              inputRefs[1].current = el;
            }}
            type="text"
            placeholder="Email"
            width="w-80"
            height="h-12"
            fontColor="text-[var(--text2)]"
            bgColor="bg-[var(--inputbox)]"
            border="border-2 border-transparent"
            rounded="rounded-[17px]"
          />
        }
        error={errors.email?.message ?? ""}
      />

      <InputBox
        input={
          <InputComp
            {...passReg}
            ref={(el) => {
              passRef(el);
              inputRefs[2].current = el;
            }}
            type="password"
            placeholder="Password"
            width="w-80"
            height="h-12"
            fontColor="text-[var(--text2)]"
            bgColor="bg-[var(--inputbox)]"
            border="border-2 border-transparent"
            rounded="rounded-[17px]"
          />
        }
        error={errors.password?.message ?? ""}
      />

      <Button
        type={"submit"}
        kind={"B"}
        color={"var(--main1)"}
        text={Auth === 'SignUp' ? "Sign Up" : "Sign In"}
      />
    </form>
  )
}

export default AuthCard;
