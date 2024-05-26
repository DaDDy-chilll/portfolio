import { Outlet } from "react-router-dom";
import { Navbar, MenuList } from "@components";

const Navigation = () => {
  return (
    <>
      <Navbar />
      <MenuList />
      <Outlet />
    </>
  );
};

export default Navigation;
