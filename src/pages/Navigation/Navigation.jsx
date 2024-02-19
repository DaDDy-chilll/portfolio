import {Outlet, useLocation} from 'react-router-dom'
import { Navbar,PageTitle,PageNumber } from '@components'
import { useDispatch, useSelector } from 'react-redux';
import { changeInfo } from '@store';
import { useEffect } from 'react';


const Navigation = () => {
  
  const location = useLocation();
  const dispatch = useDispatch()
  const {pathname} = location
  const {pageTitle,pageNumber} = useSelector(state => state.pageInfo)
  useEffect(()=>{
    dispatch(changeInfo(pathname))
  },[pathname])

  return (
    <>
        <Navbar />
        <PageTitle pageTitle={pageTitle} />
        <PageNumber  pageNumber={pageNumber} />
        <Outlet />
    </>
  )
}

export default Navigation