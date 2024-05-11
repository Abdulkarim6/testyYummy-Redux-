import Banner from "../../homeComponents/Banner/Banner";
import Category from "../../homeComponents/Category/Category";
import FavouriteMenu from "../../homeComponents/FavouriteMenu/FavouriteMenu";
import Featured from "../../homeComponents/Featured/Featured";
import Info from "../../homeComponents/Info/Info";
import Reviews from "../../homeComponents/Reviews/Reviews";
import WelcomeArea from "../../homeComponents/WelcomeArea/WelcomeArea";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <WelcomeArea></WelcomeArea>
      <Category></Category>
          <Info></Info>
      <section className="flex flex-col justify-center items-center my-3 md:my-5">
        <section className="w-11/12 md:w-4/5">
          <FavouriteMenu></FavouriteMenu>
        </section>
      </section>
      <Featured></Featured>
      <section className="flex flex-col justify-center items-center mb-3 md:mb-5">
        <section className="w-full md:w-4/5">
          <Reviews></Reviews>
        </section>
      </section>
    </>
  );
};

export default Home;
