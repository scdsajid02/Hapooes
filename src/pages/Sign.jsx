import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Sign = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const navigate = useNavigate();
  const onsumbithandle = async (e) => {
    e.preventDefault()
    try {
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onsumbithandle}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState == "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot Password?</p>
        {currentState == "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState == "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Sign;
