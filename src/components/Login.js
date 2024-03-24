import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bgimage" src={BG_URL} />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="px-2 py-2 text-3xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            className="p-3 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
            placeholder="Full name"
          />
        ) : null}
        <input
          type="text"
          className="p-3 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="p-3 my-4 w-full bg-black border-solid border-2 border-white rounded-sm bg-opacity-85"
          placeholder="Password"
        />

        <button className="bg-red-700 w-full p-2 my-6 rounded-sm">
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
