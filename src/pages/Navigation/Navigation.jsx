import { Outlet } from "react-router-dom";
import { Navbar,PageTitle } from "components";


const Navigation = () => {
  return (
    <>
      <Navbar />
      <PageTitle />
      <Outlet />
    </>
  );
};

export default Navigation;
