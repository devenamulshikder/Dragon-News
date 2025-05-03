import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Header from "../components/header/Header";


const Root = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;