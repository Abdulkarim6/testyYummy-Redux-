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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("shortMeal.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="mb-5">
      <div className="flex flex-col justify-center items-center my-5">
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

      <section className='mt-8'>
            <h2 className='text-2xl font-medium text-sky-500 mb-6'>Services We Provide</h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 m-2'>
            {
                products[1]?.meals?.map((product, i) => 
                // console.log(product)
                <div key={i}>
                  <div className="card shadow-md">
                      <figure className="">
                          <img src={product?.strMealThumb} alt="" />
                      </figure>
                      <div className="card-body items-center">
                          <h2 className="card-title">{product?.strCategory}</h2>
                      </div>
                  </div>
              </div>
              )
            }
            </div>
        </section>
    </section>
  );
};

export default FavouriteMenu;
