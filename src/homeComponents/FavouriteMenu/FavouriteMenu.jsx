import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import MenuItem from "./MenuItem";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import useAnimate from '../../hooks/useAnimate';

const FavouriteMenu = () => {
  const {props} = useAnimate();
  const fadeUp = props?.children[0]?.props;
  const [data] = useMenu();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    if (data) {
      setMenus(data[0]);
    }
  }, [data]);

  const popularMenus = menus?.filter((menu) => menu.item === "special");

  return (
    <section
    {...fadeUp}
    className="mb-5">
      <div className="flex flex-col justify-center items-center ">
        <SectionTitle
          title="Our Special Menu"
          subTitle="---check it out---"
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          { popularMenus?.map((popularMenu, i) => (
            <MenuItem key={i} popularMenu={popularMenu}></MenuItem>
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
