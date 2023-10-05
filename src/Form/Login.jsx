import { useContext } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { DataContext } from "../Layout/Layout";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const {siginIn} = useContext(DataContext)
  const navigate = useNavigate()
  const {state} = useLocation()
  const signInHandler = (e)=>{
    e.preventDefault()
     const email = e.target.email.value
     const password = e.target.password.value
     
     siginIn(email,password)
     .then(() => {
      toast.success('Successfully Login!')
      navigate(state ? state : '/')
     })
     .catch(error=> toast.error(`${error.message.slice(22,).replace(')','')}`))
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mt-12 text-center">
        Login your Account
      </h1>

      <div className="mx-auto max-w-sm flex-col flex mt-14 ">
        <form onSubmit={signInHandler}>
          <div>
            <h1 className="text-lg text-[#403F3F] font-semibold">
              {" "}
              Email address
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input mt-2 bg-[#F3F3F3] rounded-sm focus:outline-none w-full max-w-sm"
            />
          </div>

          <div className="mt-5">
            <h1 className="text-lg text-[#403F3F] font-semibold"> Password</h1>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] focus:outline-none rounded-sm w-full mt-2 max-w-sm "
            />
          </div>
          <label className="label mt-1">
           <Link to={'/login/resetpassword'}> <p className="label-text-alt link link-hover">Forgot password?</p></Link>
          </label>
          <button className="btn mt-4 btn-neutral rounded w-full text-white">
            Login
          </button>
        </form>
        <span className="mt-4">
          Dont’t Have An Account ?{" "}
          <Link to={"/register"}>
            <span className="underline">Register</span>
          </Link>
        </span>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
