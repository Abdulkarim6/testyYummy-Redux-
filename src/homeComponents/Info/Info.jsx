import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./info.css"
import infoSideImg from "../../assets/welcomeImgs/infoSideImg1.jpg"
import { useEffect } from "react";

const Info = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <section
              data-aos="fade-up"
              data-aos-duration="1500"
              className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5">
            <div >
                <img className='rounded h-80 md:h-full' src={infoSideImg} alt="" />
            </div>
           <div className="flex justify-center items-center rounded my-5  ">
                <div className="box rounded md:rounded-r-full text-gray-200 font-medium p-2 md:p-5 md:mr-7">
                    <p className='mb-1'>Aug 20, 2029</p>
                    <p className="text-lg md:text-xl uppercase mb-3">Why We Are Favourite...!!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <a href="#review"><button className="btn btn-outline btn-info button__bottom-top font-semibold w-56 mt-10">See Our Customer Review</button></a>
                 </div>
            </div>
        </section>
    );
};

export default Info;
