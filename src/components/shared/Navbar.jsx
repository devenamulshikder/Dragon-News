import { NavLink } from "react-router";
import user from "../../assets/user.png";
const Navbar = () => {
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
        <img src={user} alt="" />
        <button className="btn btn-secondary p-5">Login</button>
      </div>
    </div>
  );
};
export default Navbar;
