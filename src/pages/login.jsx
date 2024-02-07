import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="font-WorkSans w-[98vw] h-full">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1639759032532-c7f288e9ef4f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-[#212337] md:p-5 rounded-lg lg:rounded-l-none">
              <h3 className="w-full pt-4 md:text-2xl text-xl text-center">
                Login to Continue!
              </h3>
              <form className="w-full px-8 flex flex-col justify-center items-center pt-6 pb-8 mb-4 bg-[#212337] rounded">
                <div className="md:w-11/12 w-full mb-4 md:flex md:justify-between">
                  <div className="w-full mb-4 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-white opacity-90"
                      for="email"
                    >
                      Your Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-white bg-[#737bbf17] border-[1.6px] border-[#ffffff10] rounded appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="md:w-11/12 w-full md:flex md:justify-between">
                  <div className="w-full mb-4 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-white opacity-90"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white bg-[#737bbf17] border-[1.6px] border-[#ffffff10] rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="text-end mb-8 md:w-11/12">
                  <Link
                    className="inline-block text-sm text-[#7984e2] align-baseline hover:opacity-70"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="md:w-11/12 w-full mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-[#ffffffe3] bg-[#7984e2] rounded-full hover:bg-[#6971b6] focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-5 border-t border-[#ffffff1f]" />
                <div className="tex t-center">
                  <Link
                    className="inline-block text-sm text-gray-400 align-baseline hover:opacity-70"
                    to="/register"
                  >
                    Already have an account?{" "}
                    <span className="text-[#7984e2]">Login!</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
