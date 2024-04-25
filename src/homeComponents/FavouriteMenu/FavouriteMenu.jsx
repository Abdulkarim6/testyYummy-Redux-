import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import MenuItem from "./MenuItem";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";

const FavouriteMenu = () => {
  const [menuReviews] = useMenu();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (menuReviews) {
      setMenus(menuReviews[0]);
    }
  }, [menuReviews]);

  const popularMenus = menus?.filter((menu) => menu.category === "popular");

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section
    data-aos="fade-up"
    data-aos-duration="1500"
    className="mb-5">
      <div className="flex flex-col justify-center items-center ">
        <SectionTitle
          title="Our Special Menu"
          subTitle="---check it out---"
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularMenus?.map((popularMenus, i) => (
            <MenuItem key={i} popularMenus={popularMenus}></MenuItem>
          ))}
        </div>
      </div>
      <div className="flex justify-center  text-center">
        <button className="text-lg font-semibold p-1 border-b-4 rounded-md hover:border-blue-500">View All Menu</button>
      </div>

    </section>
  );
};

export default FavouriteMenu;
