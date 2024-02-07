import React from "react";
import img from "../assets/about_img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:flex md:flex-row md:h-full h-fit md:max-h-[660px] justify-evenly items-center md:mt-0 mt-20">
      <div className="w-full h-full">
        <div className="w-full h-full focus flex justify-center items-center">
          <img
            src={img}
            alt="welcome img"
            className="md:w-[65%] w-full md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="w-full h- full flex justify-center md:items-start items-center flex-col">
        <h1 className="md:text-[44px] mt-6 text-3xl md:text-left text-center max-w-[600px] font-SignikaNegative font-bold tracking-wide leading-tight">
          About
        </h1>
        <p className="text-lg max-w-[500px] md:mx-0 mx-2 md:text-left text-justify mt-4 font-WorkSans font-normal text-[#9da6bacc] tracking-wide leading-tight">
          Certify is a cutting-edge platform leveraging blockchain technology to
          revolutionize the creation, issuance, and validation of certificates.
          Our platform ensures the authenticity and integrity of certificates,
          providing a tamper-proof and transparent solution for individuals and
          organizations seeking secure and verifiable certifications.
        </p>
        <Link to="/validate" className="w-full">
          <button className="md:w-[50%] max-w-[280px] px-4 bg-[#fffffff2] mt-10 h-10 rounded-full border border-[#ffffff19] text-[#3C4251] font-WorkSans font-semibold hover:bg-[#ffffffbe]">
            Contact us via email
            <FaArrowRightLong className="inline-block ml-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
