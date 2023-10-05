import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Layout/Layout";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
const LeftNav = () => {
  const { user, githubSignIn, googleSignIn } = useContext(DataContext);

  const googleSignInHandler = () => {
    const gooleAuthProvider = new GoogleAuthProvider();
    googleSignIn(gooleAuthProvider)
      .then(() => {
        toast.success("Successfully Registerd!");
      })
      .catch((error) =>
        toast.error(`${error.message.slice(22).replace(")", "")}`)
      );
  };
  const githubSignInHandler = () => {
    const githubAuthProvider = new GithubAuthProvider();
    githubSignIn(githubAuthProvider)
      .then(() => {
        toast.success("Successfully Registerd!");
      })
      .catch((error) =>
        toast.error(`${error.message.slice(22).replace(")", "")}`)
      );
  };
  return (
    <div>
     
      {user ? (
        ""
      ) : (
        
        <div className="flex-col flex">
           <h1 className="font-semibold text-2xl">Login With</h1>
          <button
            onClick={googleSignInHandler}
            className="btn btn-outline my-3"
          >
            <FcGoogle className="text-xl"></FcGoogle>Login With Google
          </button>
          <button onClick={githubSignInHandler} className="btn btn-outline">
            <FaGithub className="text-xl"></FaGithub>Login With Github
          </button>
        </div>
      )}
      <div className="flex flex-col mb-5">
        <h1 className="font-semibold text-2xl mt-8">Find Us On</h1>
        <Link to={"https://www.facebook.com/imalriyad"}>
          {" "}
          <button className="flex items-center mt-3 gap-2 p-4 w-full rounded border border-b-0">
            <BsFacebook className="text-2xl"></BsFacebook>Facebook
          </button>
        </Link>
        <Link to={"https://www.instagram.com/imalriyad"}>
          <button className="flex items-center w-full gap-2 p-4 rounded border border-b-0">
            <GrInstagram className="text-xl"></GrInstagram>Instagram
          </button>
        </Link>
        <Link to={"https://twitter.com/imalriyad"}>
          <button className="flex items-center w-full gap-2 p-4 rounded border">
            <BsTwitter className="text-xl"></BsTwitter>Twitter
          </button>
        </Link>
      </div>
      <div className="bg-[#F3F3F3] p-6 rounded space-y-7">
        <h1 className="font-semibold mb-5 text-2xl">Q-Zone</h1>
        <img
          src="https://i.ibb.co/BNK2nVH/qZone1.png"
          className="mx-auto cursor-pointer"
          alt=""
        />
        <img
          src="https://i.ibb.co/MnsFJFd/qZone2.png"
          className="mx-auto cursor-pointer"
          alt=""
        />
        <img
          src="https://i.ibb.co/B6LFBjh/qZone3.png"
          className="mx-auto cursor-pointer"
          alt=""
        />
      </div>
      <Toaster />
    </div>
  );
};

export default LeftNav;
