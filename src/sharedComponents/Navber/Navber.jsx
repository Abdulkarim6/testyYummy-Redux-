import { useState } from "react";
import { useLocation } from 'react-router-dom';
import CreateButton from "../../utils/CreateButton";
import { HiMenu, HiOutlineShoppingCart, HiX } from "react-icons/hi";

const Navber = () => {
  let location = useLocation();
  let menuId = location?.pathname.slice(11, 30);
  let navCss; 
  
  if (location?.pathname == `/food-menu/${menuId}` || location?.pathname == `/my-cart`) {
    navCss =`navbar text-white bg-neutral text-xl font-medium p-1 max-w-screen-xl mx-auto` 
  } else {
    navCss =`navbar fixed z-10 text-white bg-black bg-opacity-40 text-xl font-medium p-1 max-w-screen-xl mx-auto` 
  }

  const [sideNav, setSideNav] = useState(false)

    const handleSideNav = () =>{
        setSideNav(Current => !Current)
    }

  const menu = (
    <>
      <CreateButton path="/" title="Home"></CreateButton>
      <CreateButton path="/food-menu" title="Our-Menu"></CreateButton>
      <CreateButton path="/" title="Home"></CreateButton>
      <CreateButton path="/my-cart" title={<HiOutlineShoppingCart />}></CreateButton>
    </>
  );
  return (
      <div className={navCss}>
        <div className="navbar-start inline-block">
              <div className="flex items-center">
                  {
                      sideNav ? 
                      <button onClick={handleSideNav} className="md:hidden text-3xl font-3xl font-bold"><HiX /></button>
                      :
                      <button onClick={handleSideNav} className="md:hidden text-3xl font-3xl font-bold"><HiMenu /></button>
                  }
                  <a className="ml-2 text-2xl md:text-3xl font-bold font-serif">
                       Tasty<span className="text-yellow-400">Yummy</span>
                  </a>
              </div>
  
              {
                sideNav &&
      
                  <section className="bg-black w-[200px] rounded mt-3 p-3 absolute md:hidden">
                      <ul className="text-lg font-semibold">
                      {menu}
                      </ul>
                  </section>
              }
        </div>
      
  
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 items-center">{menu}</ul>
        </div>
      </div>
  );
};

export default Navber;
