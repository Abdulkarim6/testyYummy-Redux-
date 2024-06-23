const BannerShare = ({title, subTitle}) => {
  return (
    <section className="relative flex flex-col justify-center items-center">
      {/* bg img position set */}
      <div className="relative BannerShare h-[250px] md:h-[400px] flex justify-center items-center rounded ">
        {/*backdrop position set */}
        <div className="absolute top-5 left-5 right-5 bottom-5 md:top-10 md:left-10 md:right-10 md:bottom-10 bg-green-100 opacity-40 "></div>
      </div>

      {/* title and text position set */}
      <div className="absolute top-auto left-auto flex flex-col items-center justify-center w-4/5 md:w-3/5 h-4/5 md:h-4/5 rounded font-medium p-2 md:p-5">
        <h3 className="text-3xl md:text-4xl text-black font-bold uppercase">
          {title}
        </h3>
        <p className="text-xl text-black mt-5 font-semibold">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default BannerShare;
