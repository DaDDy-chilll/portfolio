import { Outlet } from "react-router-dom";
import { Navbar } from "components";

const Navigation = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
};

export default Navigation;
