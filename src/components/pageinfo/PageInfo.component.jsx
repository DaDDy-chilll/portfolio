import { Outlet, useLocation } from "react-router-dom";
import { changeInfo } from "@store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageNumber from "../page-number/PageNumber.component.jsx";
import PageTitle from "../pagetitle/PageTitle.component.jsx";

const PageInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;

  useEffect(() => {
    dispatch(changeInfo(pathname));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <PageTitle />
      <PageNumber />
      <Outlet />
    </>
  );
};

export default PageInfo;
