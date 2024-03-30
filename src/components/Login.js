import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import {
  checkValidEmailAndPassword,
  checkValidSignUpForm,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleSubmitButton = () => {
    //validate the form
    // checkValidEmailAndPassword(email,password)
   

    let message = null;
    if (isSignInForm) {
      message = checkValidEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      );
    } else {
      message = checkValidSignUpForm(
        nameRef.current.value,
        emailRef.current.value,
        passRef.current.value
      );
    }
    setErrorMsg(message);
    if (message) return;

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("created user:", user);

          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(`${errorCode}: ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode}: ${errorMessage}`);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const signedInUser = userCredential.user;
          console.log("logged in user", signedInUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bgimage" src={BG_URL} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="px-2 py-2 text-3xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={nameRef}
            type="text"
            className="p-2 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
            placeholder="Full name"
          />
        ) : null}
        <input
          ref={emailRef}
          type="text"
          className="p-2 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
          placeholder="Email or phone number"
        />
        <input
          ref={passRef}
          type="password"
          className="p-2 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold py-2">{errorMsg}</p>
        <button
          className="bg-red-700 w-full p-2 my-6 rounded-sm"
          onClick={handleSubmitButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="p-2 my-4 text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
