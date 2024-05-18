import { useEffect, useState } from "react";
import { HiTrash , HiMinus, HiPlus} from "react-icons/hi";
import {
  useGetmyCartMenusQuery,
  useUpdateMenuQuantityMutation,
} from "../../features/api/cartApi";

const Cart = () => {
  const buttonCss ="border border-solid border-blue-500 px-1 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"
  const { isLoading, isSuccess, isError, data } = useGetmyCartMenusQuery();
  const [updateQuantity] = useUpdateMenuQuantityMutation();

  const handleUpdateQuantity = (quantity, idMeal) => {
    console.log(quantity, idMeal);
    const newData = { quantity: quantity, idMeal: idMeal };
    if (quantity < 1) {
      console.log(true);
      return;
    } else if (newData) {
      updateQuantity(newData);
    }
  };

  return (
    <section className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>menu</th>
            <th>Thumbnail</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
        </thead>
        {data?.map(
          ({ _id, idMeal, strMeal, strMealThumb, quantity, price }) => (
            <tbody key={_id}>
              <tr className="hover text-lg font-medium">
                <th className="text-base md:text-lg">{strMeal}</th>
                <td>
                  <img
                    className="h-12 w-12 md:h-14 md:w-14"
                    src={strMealThumb}
                    alt="Thumbnail"
                  />
                </td>
                <td>
                  <div className="text-xl flex">
                      <button className={`button ${buttonCss}`}
                        onClick={() => handleUpdateQuantity(quantity - 1, idMeal)}
                      >
                        <HiMinus />
                      </button>
                        <h2 className="w-10 md:w-20 text-center">{quantity}</h2>
                      <button className={`button ${buttonCss}`}
                        onClick={() => handleUpdateQuantity(quantity + 1, idMeal)}
                      >
                        <HiPlus />
                      </button>
                  </div>
                </td>
                <td>${price}.00</td>
                <td>${price * quantity}.00</td>
                <td>
                  <button className={`text-2xl text-red-600`}
                        // onClick={() => handleUpdateQuantity(quantity + 1, idMeal)}
                      >
                        <HiTrash/>
                  </button>
                </td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </section>
  );
};

export default Cart;
