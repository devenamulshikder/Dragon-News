import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {

  const {loginUser} = use(AuthContext)
const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("User Login Successfully!")
      navigate('/')
    }).catch((err) => {
      toast.error(err.message)
    });

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
