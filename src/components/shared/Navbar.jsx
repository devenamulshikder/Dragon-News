import { Link, NavLink } from "react-router";
import userInfo from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("User Log Out Successfully!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-between items-center gap-4 max-w-7xl mx-auto my-4">
      <div></div>
      <div className="flex gap-4 lg:ml-36">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/About"}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          About
        </NavLink>
        <NavLink
          to={"/career"}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-3">
        {user ? (
          <>
            <img src={userInfo} alt="" />
            <button onClick={handleLogOut} className="btn btn-secondary p-5">
              Log out
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-secondary p-5">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
