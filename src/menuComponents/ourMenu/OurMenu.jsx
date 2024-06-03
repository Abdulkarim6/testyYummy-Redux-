import { categoryFilter } from "../../features/menuSlice/menuSlice";
import { categories } from "../../utils/arrays";
import { useDispatch, useSelector } from "react-redux";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";

const OurMenu = () => {
  const buttonCss = "border border-solid border-blue-500 p-2 mt-3 md:mt-5 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"
  const [spliceMenu, setSpliceMenu] = useState(true);
  /* filter category */
  const dispatch = useDispatch();
  const menuFilterSate = useSelector((state) => state.menuFilter);
  const { selectedCategory } = menuFilterSate;

  /* load menu data */
  const [data, loading] = useMenu();
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    if (data) {
      setMenus(data[0]);
    }
  }, [data]);

  /* show menu data on UI */
  let content;

  if (menus) {
  /* filter content */
   const filtered = menus
      .filter((menu) => {
        if (selectedCategory.length) {
          return selectedCategory.includes(menu.category);
        }
        return menus;
      })
      /* set comtent */
      if (spliceMenu === true) {
        content = filtered.splice(0, 12).map((menu, i) => <MenuCard key={i} menu={menu}></MenuCard>);
      } else {
        content = filtered.map((menu, i) => <MenuCard key={i} menu={menu}></MenuCard>);
      }
      
  }

  /*filter button class css */
  const activeClass ="text-white bg-indigo-500 border-white";

  return (
    <section className="flex flex-col items-center mb-3 md:mb-5">

       <SectionTitle
          title="Add To Cart"
          subTitle="---Choose Your Food---"
        ></SectionTitle>

      <div className="">
           {categories.map((singleCategory, i) => (
             <button
               key={i}
               className={`border px-3 py-2 m-px md:m-1 rounded-xl font-semibold ${ selectedCategory.includes(singleCategory.category) ? activeClass : null }`}
               onClick={() => dispatch(categoryFilter(singleCategory.category))}
             >
               {singleCategory.category}
             </button>
           ))}
      </div>
      {
        loading ? 
      <p className="text-center text-2xl md:text-3xl font-medium text-indigo-500 mt-2 md:mt-5">Loading...</p>
        :
      <section className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 gap-x-4 md:gap-x-5 px-3 md:px-5 justify-items-center mt-5">
               {
                 content
               }
          </div>
         <button onClick={()=> setSpliceMenu(current => !current)} className={`button ${buttonCss}`}>{spliceMenu ? 'View all menu' : 'View less menu'}</button>
      </section>
      }

    </section>
  );
};

export default OurMenu;
