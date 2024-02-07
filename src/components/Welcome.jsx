import React from "react";
import img from "../assets/Saly-1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="md:flex md:flex-row-reverse md:h-full h-fit md:max-h-[660px] justify-evenly items-center">
      <div className="w-full h-full">
        <div className="w-full h-full focus flex justify-center items-center">
          <img src={img} alt="welcome img" className="md:w-[70%]" />
        </div>
      </div>
      <div className="w-full h-full md:ml-8 flex justify-center md:items-start items-center flex-col md:mt-0 mt-4">
        <h1 className="md:text-[44px] text-3xl md:text-left text-center max-w-[600px] font-SignikaNegative font-bold tracking-wide leading-tight">
          <span className="gradient-txt">Certify,</span> Your{" "}
          <span className="text-[#7CFFA9]">Trusted</span> Blockchain{" "}
          <span className="text-[#9CA6FF]">Certificate</span> Platform
        </h1>
        <p className="text-lg max-w-[500px] md:text-left text-center mt-4 font-WorkSans font-normal text-[#9da6bacc] tracking-wide leading-tight">
          An innovative platform using blockchain to modernize certificate
          creation and validation.
        </p>
        <Link to="/validate" className="w-full">
          <button className="md:w-[50%] max-w-[280px] px-4 bg-[#fffffff2] mt-10 h-10 rounded-full border border-[#ffffff19] text-[#3C4251] font-WorkSans font-semibold hover:bg-[#ffffffbe]">
            Validate Certificate
            <FaArrowRightLong className="inline-block ml-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
