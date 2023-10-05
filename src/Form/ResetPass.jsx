import { useContext, useRef } from "react";
import { DataContext } from "../Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const { passReset } = useContext(DataContext);
  const navigate = useNavigate()
  const emailRef = useRef();
  const passResetHandler = () => {
     const email = emailRef.current.value
     passReset(email)
     .then(() => {
        toast.success('Successfully Password Reset Link Sent! Cheak Your mail')
        navigate('/login')
       })
       .catch(error=> toast.error(`${error.message.slice(22,).replace(')','')}`))
  };
  return (
    <div className="mx-auto text-center max-w-sm">
      <input
        type="email"
        ref={emailRef}
        placeholder="Type your Registerd Email"
        className="input input-bordered input-md w-full max-w-sm"
      />
      <button
        onClick={passResetHandler}
        className="btn my-5 w-full
 btn-neutral"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPass;
