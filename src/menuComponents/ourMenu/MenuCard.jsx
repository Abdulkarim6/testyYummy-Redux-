import { Link } from "react-router-dom";

const MenuCard = ({menu}) => {
    const {strMeal, strMealThumb, idMeal, price} = menu;

    const buttonCss = "border border-solid border-blue-500 p-2 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"

  return (
    <div className="card card-compact w-[360px] h-[380px] shadow-lg rounded-none border border-solid border-gray-300 hover:border-black">
      <figure className="relative strMealThumb">
        <img
          src={strMealThumb}
          alt="strMealThumb"
        />
        <h3 className="absolute right-0 bottom-0 text-xl bg-gray-600 text-white rounded px-3 py-2"> ${price}.00</h3>
      </figure>
      <div className="card-body">
        {
          strMeal.length > 30 ?
         <h2 className={`card-title`} title={`${strMeal}`}>{strMeal.slice(0, 30)}...</h2>
         :
         <h2 className="card-title">{strMeal}</h2>
        }
        <div className="card-actions justify-between">
            <Link to={`/food-menu/${idMeal}/${price}`}><button className={`button ${buttonCss}`}>View Details</button></Link>
            <button className={`button ${buttonCss}`}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
