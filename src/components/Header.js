import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userFromStore = useSelector((store) => store.user);
  // console.log("userFromStore", userFromStore);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        //("remove user from dispatch called");
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unounts

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.// navigation will be handled in onAuthStateChanged
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
       // console.log("error in signout", error);
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
