import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData, useLocation } from "react-router-dom";
import { useAddToCartMutation } from "../../features/api/cartApi";

const MenuDatail = () => {
   let location = useLocation();
   let menuPrice = location?.pathname.slice(17, 30);
   const [menuDes, setMenuDes] = useState(false);

   const handleForMenuDes = () => [
    setMenuDes(current => !current)
   ]

    const menu = useLoaderData();
    const {strMeal, strMealThumb, idMeal, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10} = menu.meals[0];
    const menuDetail = {strMeal, strMealThumb, idMeal, price : menuPrice, quantity : 1}
   
    const [addToCart, {isSuccess, data}] = useAddToCartMutation();

    useEffect(()=>{
      if(isSuccess && data?.successMessage === "you added this food."){
       toast.success(data?.successMessage, {id : "addToCart"})
     }
   },[isSuccess, data?.successMessage])
   
    const buttonCss ="border border-solid border-blue-500 p-2 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"

    return (
        <section className="w-full flex flex-col lg:flex-row lg:justify-around gap-2 my-2 md:my-5 p-2 md:pr-5">
            <div className="card card-compact w-full lg:w-[500px] md:h-[450px] shadow-lg rounded-none border border-solid border-gray-300 hover:border-black">
              <figure className="relative strMealThumb">
                <img
                  src={strMealThumb}
                  alt="strMealThumb"
                />
              </figure>
               <h2 className="text-xl md:text-2xl font-semibold m-2">{strMeal}</h2>
            </div>
            <div className="w-full lg:w-1/2">
               <h3 className="text-lg md:text-xl font-semibold my-2">Recipe item: {`${strIngredient1}, ${strIngredient2}, ${strIngredient3}, ${strIngredient4}, ${strIngredient5}, ${strIngredient6}, ${strIngredient7}, ${strIngredient8}, ${strIngredient9}, ${strIngredient10}`}</h3>
               {
                menuDes == true ?
               <p className="font-semibold">Recipe Instructions: {strInstructions}
               <button onClick={() => handleForMenuDes()} className={`text-xl font-semibold`}><span className="text-gray-600 ml-px">See less</span></button>
               </p>
               :
               <p className="font-semibold">Recipe Instructions: {strInstructions.slice(0, 500)}
               <button onClick={() => handleForMenuDes()} className={`text-xl font-semibold`}>... <span className="text-gray-600">See more</span></button>
               </p>
               }
               
              <div className="flex items-center my-3 md:my-5">
                <button onClick={()=> addToCart(menuDetail)} className={`button ${buttonCss}`}>ADD TO CART</button>
                <h3 className="text-xl md:text-2xl font-semibold ml-2 border border-solid border-blue-500 p-0.5">Price: ${menuPrice}.00</h3>
              </div>
              {
                data?.warningMessage &&
                <p className="text-lg md:text-xl md:font-medium text-blue-500">*{data?.warningMessage}</p>
              }
            </div>
        </section>
    );
};

export default MenuDatail;