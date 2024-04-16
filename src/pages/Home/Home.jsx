import Banner from "../../homeComponents/Banner/Banner";
import Category from "../../homeComponents/Category/Category";
import FavouriteMenu from "../../homeComponents/FavouriteMenu/FavouriteMenu";
import Featured from "../../homeComponents/Featured/Featured";
import Info from "../../homeComponents/Info/Info";
import Reviews from "../../homeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <section className="flex flex-col justify-center items-center my-5">
        <section className="w-4/5">
          <Info></Info>
          <FavouriteMenu></FavouriteMenu>
        </section>
      </section>
      <Featured></Featured>
      <section className="flex flex-col justify-center items-center my-5">
        <section className="w-4/5">
          <Reviews></Reviews>
        </section>
      </section>
    </>
  );
};

export default Home;
