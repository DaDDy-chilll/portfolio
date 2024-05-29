import { Outlet } from "react-router-dom";
import { Navbar, MenuList, Alert } from "@components";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { isOpen } = useSelector((state) => state.alertState);
  return (
    <>
      <Navbar />
      <MenuList />
      {isOpen && <Alert />}
      <Outlet />
    </>
  );
};

export default Navigation;
