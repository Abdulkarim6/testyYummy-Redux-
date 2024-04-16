const MenuItem = ({ popularMenus }) => {
  const { image, name, price, recipe } = popularMenus;
  return (
    <div className="flex pr-2 border-r-4 rounded-md border-blue-500">
      <div className="w-[100px]">
        <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
      </div>
      <div className="px-2">
        <h3 className="text-lg uppercase font-semibold">{name}---------</h3>
        <p className="text-base font-medium text-gray-500">{recipe}</p>
      </div>
      <div>
        <p className="text-base font-medium text-gray-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
