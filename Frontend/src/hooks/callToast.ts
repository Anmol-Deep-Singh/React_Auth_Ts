import toast from 'react-hot-toast';

type ToastProp = {
  kind?: "A";
  promise?: Promise<any>;
  text?: string;
};

const callToast = ({ kind, promise, text}: ToastProp) => {
  switch (kind) {
    case "A":
      toast.promise(
        (async () => {
          const res = await promise;
          if (res?.error) {
            throw new Error(res.data.message);
          }
          console.log(res)
          return res;
        })(),
        {
          loading: "Loading...",
          success: (res) => `${res.data.message}`,
          error: (err) => `${err}`,
        }
      );
      break;
  }
};

export default callToast;
