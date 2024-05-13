import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./category.css";
import { FreeMode, Pagination, Grid } from "swiper/modules";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import { categories } from "./caregoryArray";

const Category = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-3 mb-5">
      <SectionTitle
        title="Our Menu Categories"
        subTitle="----From 10:00am to 11:00pm----"
      ></SectionTitle>
      <div className="w-11/12">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
              grid: { rows: 2 },
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 8,
              grid: { rows: 2 },
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: { rows: 2 },
            }
          }}
          // slidesPerView={5}
          // grid={{
          //   rows: 2,
          // }}
          // spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, FreeMode, Pagination]}
          className="mySwiper"
        >
          {categories.map((category, i) => (
            <SwiperSlide key={i} className="rounded-lg border-2 border-solid border-slate-300 z-0 hover:z-50">
              <img className="rounded zimg transition-all duration-500 ease-in" src={category?.categoryimg} alt="" />
              <h3 className="text-base md:text-xl lg:text-2xl mt-7 text-slate-600 font-sans font-medium  uppercase">
                {category?.category}
              </h3>
           </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
