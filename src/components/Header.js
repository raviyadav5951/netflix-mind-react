import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const userFromStore = useSelector((store) => store.user);
  console.log("userFromStore", userFromStore);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error in signout", error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img alt="logo" src={LOGO} className="w-44" />
      {userFromStore ? (
        <div className="flex">
          <img
            alt="userlogo"
            src={userFromStore?.photoURL ?? USER_AVATAR}
            className="w-12 h-12 rounded-md p-1 self-center"
          />
          <button className="font-bold text-white" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
