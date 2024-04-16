import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";

import img1 from "../../assets/banner/Burger.jpg";
import img2 from "../../assets/banner/Beef.jpg";
import img3 from "../../assets/banner/Dessert.jpg";
import img4 from "../../assets/banner/Breakfast.jpg";
import img5 from "../../assets/banner/Vegetarian.jpg";
// import img6 from "../../assets/home/06.png";

const saveimgs  = [img1,img2, img3, img4, img5]

// const images = [
//   {
//     imgLink: "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
//     title: "Beef Asado",
//     subTitle: "",
//   }
// ];

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[94vh]"
      >

        {saveimgs?.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Banner;
 