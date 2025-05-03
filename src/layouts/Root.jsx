import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";


const Root = () => {
    return (
        <div>
            <Outlet/>
            <Navbar/>
        </div>
    );
};

export default Root;