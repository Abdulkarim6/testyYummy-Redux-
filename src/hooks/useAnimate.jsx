import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const useAnimate = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <section>  
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
            ></div>
            <div
                data-aos="fade-down"
                data-aos-duration="1500"
            ></div>
        </section>
    );
};

export default useAnimate;