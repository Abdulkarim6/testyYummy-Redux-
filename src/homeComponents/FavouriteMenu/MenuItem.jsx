const MenuItem = ({ popularMenu }) => {
  console.log(popularMenu);
  const { strMealThumb, category, price, strCategoryDescription, idMeal } = popularMenu;
  return (
    <section className="relative zoomImgShow">
      <img className="zoomImg w-[290px] md:w-[300px] h-[270px] ml-[100px] object-cover absolute -top-[290px] z-10" src={strMealThumb} alt="" />
      <div className="flex pr-2 border-r-4 rounded-md border-blue-500">
        <img
          className="smallImg w-[100px] h-[100px] object-cover"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={strMealThumb}
          alt=""
        />
        <div className="mx-2 md:mx-3">
          <h3 className="text-lg uppercase font-semibold">
            {category}---------
          </h3>
          <p className="text-base font-medium text-gray-500">
            {strCategoryDescription?.slice(0, 100)}...
          </p>
        </div>
        <div>
          <p className="text-base font-medium text-gray-500">${price}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
