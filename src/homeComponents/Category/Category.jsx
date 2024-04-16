import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import categoryImg1 from "../../assets/home/slide1.jpg";
import categoryImg2 from "../../assets/home/slide2.jpg";
import categoryImg3 from "../../assets/home/slide3.jpg";
import categoryImg4 from "../../assets/home/slide4.jpg";
import categoryImg5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";

const Category = () => {
  const categoryImgs = [
    { categoryimg: categoryImg1, title: "SALAD" },
    { categoryimg: categoryImg2, title: "SOUPS" },
    { categoryimg: categoryImg3, title: "PIZZAS" },
    { categoryimg: categoryImg4, title: "DESSERTS" },
    { categoryimg: categoryImg5, title: "SALAD" },
  ];
  
  return (
    <section className="flex flex-col justify-center items-center mt-3 mb-5">
      <SectionTitle title='Order Now' subTitle="---From 10:00am to 11:00pm---"></SectionTitle>
      <div className="w-4/5">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categoryImgs.map((category, i) => (
            <SwiperSlide key={i} className="flex flex-col justify-center">
              <img
                className="block h-full w-full object-cover"
                src={category?.categoryimg}
                alt=""
              />
              <h3 className="text-3xl font-sans font-medium -mt-16 text-white">{category?.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
