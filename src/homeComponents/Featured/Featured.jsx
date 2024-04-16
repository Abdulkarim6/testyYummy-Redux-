import featureImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div className="featured-item flex flex-col justify-center items-center bg-fixed pt-2 my-5">
      <SectionTitle
        subTitle="-------check it out---------"
        title="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center text-gray-100 bg-slate-700 bg-opacity-60 pb-20 pt-12 px-36">
        <div className="box">
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita hic dolorem, iusto vel suscipit nam excepturi debitis
            magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
            consectetur blanditiis laboriosam fugiat ea quia similique quam nisi
            reprehenderit numquam magnam nemo vitae cupiditate, atque maiores
            dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <button className="text-white hover:text-black rounded-lg p-2 border-2 border-sky-600 hover:bg-sky-600 w-56 mt-4"> Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
