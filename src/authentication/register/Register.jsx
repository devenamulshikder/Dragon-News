/* eslint-disable no-unused-vars */
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {

  const {createUser, setUser} = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo_url = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        toast.success("User Created Successfully!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="bg-base-300 p-18 max-w-3xl mx-auto">
      <h1 className="text-secondary font-bold text-2xl text-center">
        Register your account!
      </h1>
      <div className="border border-secondary my-4"></div>
      <form onSubmit={handleRegister}>
        {/* name */}
        <div className="fieldset">
          <legend className="font-semibold text-lg mt-10">Your Name!</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type your name"
            name="name"
          />
        </div>
        {/* photo url */}
        <div className="fieldset">
          <legend className="font-semibold text-lg mt-5">Photo URL</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            name="photo_url"
          />
        </div>
        {/* email */}
        <div className="fieldset">
          <legend className="font-semibold text-lg mt-5">
            Enter your Email!
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your email address"
            name="email"
          />
        </div>
        {/* password */}
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
        <button
          type="submit"
          className="w-full bg-secondary text-white my-5 btn"
        >
          Register Now
        </button>
      </form>
      <p className="text-secondary text-center mt-5">
        Already Have An Account ?{" "}
        <Link to={"/login"} className="text-primary font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};
export default Register;
