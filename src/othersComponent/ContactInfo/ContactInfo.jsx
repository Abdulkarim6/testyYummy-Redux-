import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import { infoData } from "../../utils/arrays";

const ContactInfo = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section>
      <SectionTitle
        subTitle="-------Have a good day---------"
        title="Contact Information"
      ></SectionTitle>
      <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 mb-5 px-2">
        {
            infoData.map((item, i) => 
                // console.log(item.subTitle2)
                <div key={i} className="bg-neutral text-white py-5 w-full rounded flex flex-col items-center">
                       <img src={item?.icon} alt="" />
                       <h3 className="text-2xl font-semibold my-2">{item.title}</h3>
                       <p className="text-base font-semibold">{item.subTitle1}</p>
                       <p className="text-base font-semibold">{item.subTitle2}</p>
                </div>
            )
        }
      </div>
    </section>
  );
};

export default ContactInfo;
