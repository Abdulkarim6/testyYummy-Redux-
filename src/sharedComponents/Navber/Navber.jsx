import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { HiMenu,HiX } from "react-icons/hi";
import { useGetmyCartMenusQuery } from "../../features/api/cartApi";


const Navber = () => {
  const {data } = useGetmyCartMenusQuery();
  let location = useLocation();
  let menuId = location?.pathname.slice(11, 30);
  let navCss; 
  
  if (location?.pathname == `/food-menu/${menuId}` || location?.pathname == `/my-cart` || location?.pathname == `/checkout`) {
    navCss =`navbar text-white bg-neutral text-xl font-medium p-1 max-w-screen-xl mx-auto` 
  } else {
    navCss =`navbar fixed z-10 text-white bg-black bg-opacity-40 text-xl font-medium p-1 max-w-screen-xl mx-auto` 
  }

  const [sideNav, setSideNav] = useState(false)

    const handleSideNav = () =>{
        setSideNav(Current => !Current)
    }
    const classStyle = `p-1 text-base md:text-xl text-blue-400
     rounded-md border border-transparent hover:border-blue-500 uppercase`

  const menu = (
    <>
     
      <NavLink to='/'><li className={`${classStyle} mb-3 md:mb-0 min-w-min	`}>Home</li></NavLink>
      <NavLink to='/food-menu'><li className={`${classStyle} mb-3 md:mb-0`}>Menu</li></NavLink>
      <NavLink to='/contact'><li className={`${classStyle} mb-3 md:mb-0`}>Contact</li></NavLink>
      <NavLink to='/reservation'><li className={`${classStyle} mb-3 md:mb-0`}>Reservation</li></NavLink>
      <NavLink to='/my-cart'><li className={`${classStyle} mb-3 md:mb-0`}>
              <span className="absolute left-8 md:left-7 bottom-8 md:bottom-3">{data?.length}</span>
              <FontAwesomeIcon icon={faCartPlus} /></li>
      </NavLink>
      
      
    </>
  );
  return (
      <div className={navCss}>
        <div className="navbar-start inline-block">
              <div className="flex items-center">
                  {
                      sideNav ? 
                      <button onClick={handleSideNav} className="md:hidden text-3xl font-bold"><HiX /></button>
                      :
                      <button onClick={handleSideNav} className="md:hidden text-3xl font-bold"><HiMenu /></button>
                  }
                  <a className="ml-2 text-2xl md:text-3xl font-bold font-serif">
                       Tasty<span className="text-yellow-400">Yummy</span>
                  </a>
              </div>
  
              {
                sideNav &&
      
                  <section className="bg-black h-auto w-[200px] rounded mt-3 absolute left-0 md:hidden z-10">
                      <ul className="navLi text-lg font-semibold my-4 ml-2">
                      {menu}
                      </ul>
                  </section>
              }
        </div>
      
  
        <div className="navbar-end hidden md:flex">
          <ul className="navLi menu menu-horizontal items-center">{menu}</ul>
        </div>
      </div>
  );
};

export default Navber;
