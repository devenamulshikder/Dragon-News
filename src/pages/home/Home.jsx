import { Outlet } from "react-router";
import Latest from "../../components/header/Latest";
import LeftAside from "../../components/leftAside/LeftAside";
import MainNews from "../../components/mainContent/MainNews";
import RightAsides from "../../components/rightAsides/RightAsides";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-2 max-w-7xl mx-auto">
      <div className="col-span-3">
        <LeftAside />
      </div>
      <div className="col-span-6">
        <MainNews />
      </div>
      <div className="col-span-3">
        <RightAsides />
      </div>
    </div>
  );
};

export default Home;
