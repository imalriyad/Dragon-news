import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../../Layout/Layout";
import auth from "../../Firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useContext(DataContext);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => toast.success("Successfully Sign Out!"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex md:flex-row flex-col my-5 justify-end items-center text-center">
      <div className="text-center flex font-semibold justify-center mx-auto space-x-4">
        <NavLink className={"md:ml-32 ml-0"} to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="gap-x-3 mt-5 flex items-center">
        {user?.photoURL ? (
          <img src={user?.photoURL} className="w-[50px] cursor-pointer rounded-full" alt="" />
        ) : (
          <img
            src="https://i.ibb.co/0rvc6g3/user.png"
            className="w-[40px] cursor-pointer"
            alt=""
          />
        )}

        {user ? (
          <button
            onClick={signOutHandler}
            className="px-8 rounded-sm py-2 font-medium  bg-[#403F3F] hover:bg-[#403F3F] text-white"
          >
            Sign Out{" "}
          </button>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="px-8 rounded-sm py-2 font-medium  bg-[#403F3F] hover:bg-[#403F3F] text-white">
              Login{" "}
            </button>
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
