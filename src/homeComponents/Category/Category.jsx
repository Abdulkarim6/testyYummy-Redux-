import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./category.css";
import { FreeMode, Pagination, Grid } from "swiper/modules";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import { categoryImgs } from "./caregoryArray";

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
              slidesPerView: 2,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
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
          {categoryImgs.map((category, i) => (
            <SwiperSlide key={i} className="rounded-lg">
              <img className="rounded" src={category?.categoryimg} alt="" />
              <h3 className="text-2xl mt-7 text-slate-600 font-sans font-medium  uppercase">
                {category?.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
