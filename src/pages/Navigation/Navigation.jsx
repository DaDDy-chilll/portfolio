import { Outlet } from "react-router-dom";
import { Navbar, MenuList,Alert } from "@components";

const Navigation = () => {
  return (
    <>
      <Navbar />
      <MenuList />
      <Alert />
      <Outlet />
    </>
  );
};

export default Navigation;
