import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useAddToCartMutation } from "../../features/api/cartApi";
import { useEffect } from "react";

const MenuCard = ({menu}) => {
    const buttonCss = "border border-solid border-blue-500 p-2 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"
    const {strMeal, strMealThumb, idMeal, price} = menu;
    const menuDetail = {strMeal, strMealThumb, idMeal, price, quantity : 1, checked : true}
   
    const [addToCart, {isSuccess, data, requestId}] = useAddToCartMutation()

    useEffect(()=>{
       if(isSuccess && data?.successMessage === "you added this food."){
        toast.success(data?.successMessage, {id : requestId})
      }
    },[isSuccess, data?.successMessage, requestId])

      useEffect(() => {
        AOS.init();
      }, [])

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
            {
              data?.message ? 
              <button disabled className={`button ${buttonCss}`}>ADD TO CART</button>
              :
              <button onClick={()=> addToCart(menuDetail)} className={`button ${buttonCss}`}>ADD TO CART</button>
            }
        </div>
      </div>
         {
           data?.warningMessage &&
           <p
              data-aos="fade-up"
              data-aos-duration="1000" 
              className="absolute top-0 text-lg md:text-xl md:font-medium text-blue-500 bg-white p-px"
            >*{data?.warningMessage}</p>
         }
    </div>
  );
};

export default MenuCard;
