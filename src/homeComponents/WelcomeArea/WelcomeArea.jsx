import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chef from "../../assets/welcomeImgs/chef.jpg";
import foodImg from "../../assets/welcomeImgs/foodImg.jpg";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomeArea = () => {
  useEffect(() => {
    AOS.init();
  }, [])
 

  return (
    <section className="mt-5 mx-5 grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="p-5">
          <h2 data-aos="fade-up"
              data-aos-duration="1500"
              className="text-2xl lg:text-5xl font-medium">{"𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝕋𝕠 𝕆𝕦𝕣 ༻꧂"}</h2>
          <h2 data-aos="fade-down"
              data-aos-duration="1500"
              className="text-xl lg:text-4xl font-medium mt-4 ml-16">{"🔥𓂀 𝓣𝓪𝓼𝓽𝔂𝓨𝓾𝓶𝓶𝔂 𓂀🔥"}</h2>
          <p className='text-base font-semibold mt-5'>We always serve fresh healthy food and have our many menu items. <br /> Food is cooked here by experienced chefs. You can order now to eat our delicious food.</p>
         <Link to="/food-menu"><button className="button__bottom-top font-semibold rounded-lg p-2  w-56 mt-10">Our Menu</button></Link>
      </div>
      <div className="grid justify-items-stretch p-5">
        <img className="w-4/5 h-[86%] justify-self-end rounded-lg" src={foodImg} alt="" />
        <img className="w-3/5 md:full justify-self-start -mt-32 md:-mt-28 lg:-mt-52 rounded-lg" src={chef} alt="" />
      </div>
    </section>
  );
};

export default WelcomeArea;



        //   <h2 className="text-3xl font-medium font-sans">{"❀ꗥ～ꗥ❀ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐎𝐮𝐫 ❀ꗥ～ꗥ❀"}</h2>
        //   <h2 className="text-3xl font-medium font-sans">{"꧁༺ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓣𝓸 𝓞𝓾𝓻 ༻꧂"}</h2>
        //   <h2 className="text-3xl font-medium font-sans">{"🔥𓂀 𝒯𝒶𝓈𝓉𝓎𝒴𝓊𝓂𝓂𝓎 𓂀🔥"}</h2>
        //   <h2 className="text-3xl font-medium font-sans">{"❝𝐓𝐚𝐬𝐭𝐲𝐘𝐮𝐦𝐦𝐲❞"}</h2>
        //   <h2 className="text-3xl font-medium font-sans">{"🌸 𝒯𝒶𝓈𝓉𝓎𝒴𝓊𝓂𝓂𝓎 🌸 🐖 ⋆ 🐓 ⋆ 🐾"}</h2>
        //   <h2 className="text-3xl font-medium font-sans">{"🔥☮  т𝔸𝕊𝕋ϔ𝕐𝓤Μ𝐌𝔶  👻🔥"}</h2>
