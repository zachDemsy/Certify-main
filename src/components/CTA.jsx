import React from "react";
import img from "../assets/Saly-43.png";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-full md:h-80 h-fit mt-32 flex justify-center items-center font-WorkSans">
      <div className="w-full max-w-[900px] h-full md:p-0 p-6 md:py-0 py-8 bg-[#8c94e9] md:rounded-[60px] rounded-[48px] md:flex justify-center items-center">
        <div className="md:w-[60%] w-full focus h-full flex items-center justify-center">
          <img src={img} alt="cta image" className="md:w-[70%] w-[80%]" />
        </div>
        <div className="w-full h-full flex flex-col justify-center md:items-start items-center md:mt-0 mt-2">
          <h1 className="text-3xl font-bold text-black opacity-85 text-center">
            Are you an Organization?
          </h1>
          <p className="text-[#1e182585] font-medium max-w-[500px] text-lg mt-4 md:text-start text-center">
            If you wish to provide blockchain-powered digital certificates to
            your students, register now.
          </p>
          <Link to="/validate">
            <button className="w-fit mt-8 bg-black font-semibold text-[#FFF] px-8 md:py-3 py-4 rounded-[30px] hover:opacity-90">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
