import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, style }) => (
  <p
    className={`text-xl font-semibold font-WorkSans ${style} hover:opacity-90 mx-2`}
  >
    {name}
  </p>
);

const Navbar = () => {
  return (
    <div className="flex w-full h-16 items-center justify-evenly">
      <div className="flex items-center justify-start w-full h-full">
        <h1 className="logo md:text-4xl text-3xl">Certify</h1>
      </div>
      <div className="md:flex hidden items-center justify-evenly w-full h-16">
        <MenuItem name="Home" style="text-white opacity-90" />
        <MenuItem
          name="About"
          style="text-[#9DA6BA] opacity-60 hover:text-white"
        />
        <MenuItem
          name="Team"
          style="text-[#9DA6BA] opacity-60 hover:text-white"
        />
        <MenuItem
          name="How it work?"
          style="text-[#9DA6BA] opacity-60 hover:text-white"
        />
      </div>
      <div className="md:flex hidden items-center justify-end w-full h-16 gap-2">
        <Link to="/register">
          <button className="w-[120px] bg-[#3c42514c] h-10 rounded-full border border-[#ffffff0c] text-[#dfe2ebd5] font-WorkSans font-semibold hover:border-[#ffffff34]">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-[120px] bg-[#fffffff2] h-10 rounded-full border border-[#ffffff19] text-[#3C4251] font-WorkSans font-semibold hover:bg-[#ffffffbe]">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
