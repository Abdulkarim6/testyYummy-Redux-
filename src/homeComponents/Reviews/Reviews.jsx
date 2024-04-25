import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";

const Reviews = () => {
  const [menuReviews] = useMenu();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (menuReviews) {
      setReviews(menuReviews[1]);
    }
  }, [menuReviews]);

  return (
    <div id="review" className="bg-fixed pt-2 my-5">
      <SectionTitle
        subTitle="------What Our Coustomers say------"
        title="Testimonials"
      ></SectionTitle>

      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review, i) => (
          <SwiperSlide key={i} className="text-left px-16 flex ">
            <div className="">
              <div className="flex items-end">
                <h3 className="text-xl md:text-2xl font-medium text-blue-500 mr-2">{review.name}</h3>
                <Rating style={{ maxWidth: 130 }} value={review.rating} readOnly />
              </div>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
