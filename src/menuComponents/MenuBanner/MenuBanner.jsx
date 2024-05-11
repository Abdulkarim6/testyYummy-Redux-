// import foodImg from "../../assets/welcomeImgs/foodImg.jpg";

const MenuBanner = () => {
  return (
    <section className="relative flex flex-col justify-center items-center">
      
             {/* bg img position set */}
       <div className="relative MenuBanner h-[250px] md:h-[400px] flex justify-center items-center rounded ">
             {/*backdrop position set */}
         <div className="absolute top-5 left-5 right-5 bottom-5 md:top-10 md:left-10 md:right-10 md:bottom-10 bg-green-100 opacity-40 ">
         </div>
       </div>

           {/* title and text position set */}
           {/* <div className="backdrop-brightness-90 bg-white/30 z-40 flex flex-col items-center justify-center w-4/5 md:w-3/5 h-4/5 md:h-4/5 rounded font-medium p-2 md:p-5"> */}
       <div className="absolute top-auto left-auto flex flex-col items-center justify-center w-4/5 md:w-3/5 h-4/5 md:h-4/5 rounded font-medium p-2 md:p-5">
         <h3 className="text-3xl md:text-4xl text-black font-bold uppercase">Our Food Menu!!!</h3>
         <p className="text-xl text-black mt-5 font-semibold">Please order your favourite food </p>
       </div>
       
    </section>
  );
};

export default MenuBanner;

{/* <div className="trnsc relative h-96 w-96 mx-auto">
<img className="h-96 w-96 my-5" src={foodImg} alt="" />
<h2 className="trns absolute top-1 left-1 hover:bg-green-200 opacity-40 w-[98%] h-[98%] text-white font-extrabold text-4xl ">Hello</h2>
</div> */}
