import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img alt="logo" src={LOGO} className="w-44" />
    </div>
  );
};

export default Header;
