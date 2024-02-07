import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Card = ({ name, role, avatar }) => (
  <div className="card-bg-focus md:w-72 w-[94%] h-80 rounded-[48px] overflow-hidden">
    <div className="w-full h-full bg-[#acaeca18] backdrop-blur-xl flex justify-center items-center flex-col p-6">
      <img src={avatar} alt="Sufiyan Ansari" className="w-[48%]" />
      <h1 className="mt-6 text-center text-2xl font-bold font-SignikaNegative mb-2 text-white opacity-90">
        {name}
      </h1>
      <p className="text-center text-base font-medium font-WorkSans text-[#c6bed1b2]">
        {role}
      </p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="w-full flex flex-col h-fit md:max-h-[650px] items-center justify-center mt-24">
      <h1 className="md:text-[44px] my-6 text-3xl md:text-left text-center font-SignikaNegative font-bold tracking-wide leading-tight">
        Team Members
      </h1>
      <div className="w-full flex gap-6 md:flex-row flex-col flex-wrap justify-center items-center">
        <Card
          name="Abu Sufiyan Ansari"
          role="Product Manager"
          avatar={avatar1}
        />
        <Card name="Harsh Yadav" role="Back-end Developer" avatar={avatar3} />
        <Card
          name="Mohd. Panbiharwala"
          role="Front-end Developer"
          avatar={avatar2}
        />
      </div>
    </div>
  );
};

export default Team;
