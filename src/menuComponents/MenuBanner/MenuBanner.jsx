const MenuBanner = () => {
  return (
    <div className="MenuBanner h-[250px] md:h-[400px] flex justify-center items-center rounded py-16 px-10">
      <div className="box w-4/5 h-4/5 md:w-3/5 md:h-4/5 rounded text-gray-200 font-medium p-2 md:p-5">
        <p className="text-lg uppercase">Our Food Menu!!!</p>
        <p>Please order your favourite food </p>
      </div>
    </div>
  );
};

export default MenuBanner;
