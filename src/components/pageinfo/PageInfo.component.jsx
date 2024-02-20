import { Outlet, useLocation } from "react-router-dom";
import { changeInfo } from "@store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNumber from "../page-number/PageNumber.component.jsx";
import PageTitle from "../pagetitle/PageTitle.component.jsx";
PageNumber;
const PageInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;
  const { pageTitle, pageNumber } = useSelector((state) => state.pageInfo);

  useEffect(() => {
    dispatch(changeInfo(pathname));
  }, [pathname]);

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <PageNumber pageNumber={pageNumber} />
      <Outlet />
    </>
  );
};

export default PageInfo;
