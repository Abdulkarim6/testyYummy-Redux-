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

const carouselimgs  = [img1,img2, img3, img4, img5]


const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500, //2500
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="h-[44vh] md:h-[60vh] lg:h-[94vh]"
      >

        {carouselimgs?.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Banner;
 