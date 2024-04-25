import { Link } from "react-router-dom";
import featureImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div className="featured-item flex flex-col justify-center items-center bg-fixed mt-5">
      <SectionTitle
        subTitle="-------check it out---------"
        title="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center text-white bg-slate-700 bg-opacity-30 pb-20 pt-12 px-10">
        <div className="box">
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="text-lg md:text-xl uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita hic dolorem, iusto vel suscipit nam excepturi debitis
            magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
            consectetur blanditiis laboriosam fugiat ea quia similique quam nisi
            reprehenderit numquam magnam nemo vitae cupiditate, atque maiores
            dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <Link className="text-black" to="/food-menu"><button className="button__bottom-top font-semibold rounded-lg p-2  w-56 mt-10">Our Menu</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
