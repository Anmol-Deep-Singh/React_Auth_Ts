import toast from "react-hot-toast";

type BasicKinds = "success" | "error" | "loading"; 

type ToastProp = {
  kind?: "A" | "B";
  promise?: Promise<any>;
  text?: string;
  basic?: BasicKinds; // restrict to valid toast functions
};

const callToast = ({ kind, promise, text, basic }: ToastProp) => {
  switch (kind) {
    case "A":
      toast.promise(
        (async () => {
          const res = await promise;
          if (res?.error) {
            throw new Error(res.data? res.data.message?res.data.message:res.data :"Something went wrong");
          }
          
          return res;
        })(),
        {
          loading: "Loading...",
          success: (res) => `${res.data.message}`,
          error: (err) => `${err}`,
        },
        {
          position: "top-right",
        }
      );
      break;

    case "B":
      if (basic && text) {
        (toast as any)[basic](text, {
            position: "top-right",
            duration: "200",
        });
      }
      break;

    default:
      break;
  }
};

export default callToast;
