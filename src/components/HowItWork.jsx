import React from "react";
import img from "../assets/Saly-10.png";

const Card = ({ classes, num, title, p1, p2 }) => (
  <div className={`md:w-1/2 ${classes} w-full flex`}>
    <div className="relative md:w-80 md:h-80 w-[94%] h-fit bg-[#212337] rounded-[40px] p-8">
      <div className="flex justify-center">
        <div className="absolute -top-10 w-20 h-20 bg-[#737BBF]  rounded-3xl flex items-center justify-center">
          <h1 className="md:text-5xl text-[40px] text-center font-SignikaNegative font-bold opacity-70">
            {num}
          </h1>
        </div>
      </div>
      <h1 className="w-full mt-10 text-center text-2xl font-bold font-SignikaNegative mb-2 opacity-80">
        {title}
      </h1>
      <p className="w-full text-xs font-WorkSans mb-2 text-[#c4d1eecc] text-center">
        {p1}
      </p>
      <p className="w-full text-xs font-WorkSans mt-2 text-[#c4d1eecc] text-center">
        {p2}
      </p>
    </div>
  </div>
);

const HowItWork = () => {
  return (
    <div className="w-full flex flex-col h-fit items-center justify-center mt-24">
      <h1 className="md:text-[44px] mt-6 text-3xl md:text-left text-center font-SignikaNegative font-bold tracking-wide leading-tight">
        How It Works
      </h1>
      <div className="flex w-full flex-wrap justify-center items-end">
        <div className="md:w-1/2 w-full flex justify-end md:pr-10 items-start md:mb-0 mb-8">
          <img
            src={img}
            alt="How it works"
            className="md:w-[80%] w-full md:max-w-[500px]"
          />
        </div>

        <Card
          num={1}
          classes={
            "md:pl-14 mt-20 md:justify-start justify-center md:item-end item-center"
          }
          title={"Certificate Creation"}
          p1={
            "Organization's can create certificates by providing necessary details such as name, date of achievement, and other relevant information."
          }
          p2={
            "Certify uses advanced algorithms to generate a distinct cryptographic hash, often referred to as a digital fingerprint, based on the certificate data provided."
          }
        />
        <Card
          num={2}
          classes={
            "md:pl-14 mt-20 md:justify-end justify-center md:item-start item-center"
          }
          title={"Blockchain Recording"}
          p1={
            "The generated certificate data and cryptographic hash are securely stored on the blockchain, ensuring immutability and transparency."
          }
          p2={
            "The authentication data and encrypted code are securely stored on the blockchain, ensuring both immutability and transparency."
          }
        />
        <Card
          num={3}
          classes={
            "md:pl-14 mt-20 md:justify-start justify-center md:item-start item-center"
          }
          title={"Certificate Validation"}
          p1={
            "Anyone can verify the authenticity of a certificate by inputting the certificate ID or scanning a QR code associated with the certificate."
          }
          p2={
            "The system validates certificate data by comparing cryptographic hashes from the blockchain, affirming its authenticity."
          }
        />
      </div>
    </div>
  );
};

export default HowItWork;
