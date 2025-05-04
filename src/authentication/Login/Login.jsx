import React from "react";
import { Link } from "react-router";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-base-300 p-18 max-w-3xl mx-auto">
      <h1 className="text-secondary font-bold text-2xl text-center">
        Login your account!
      </h1>
      <div className="border border-secondary my-4"></div>
      <form onSubmit={handleLogin}>
        <div className="fieldset">
          <legend className="font-semibold text-lg mt-10">
            Enter your Email!
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type your email"
            name="email"
          />
        </div>
        <div className="fieldset">
          <legend className="font-semibold text-lg mt-5">
            Type your password!
          </legend>
          <input
            type="password"
            className="input w-full"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button className="w-full bg-secondary text-white my-5 btn">
          Login
        </button>
      </form>
      <p className="text-secondary text-center mt-5">
        Do not Have An Account ?{" "}
        <Link to={"/register"} className="text-primary font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
};
export default Login;
