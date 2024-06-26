import { useEffect} from "react";
import toast from 'react-hot-toast';
import { HiTrash , HiMinus, HiPlus} from "react-icons/hi";
import {useDeleteFromCartMutation,useGetmyCartMenusQuery,useMenuCheckedToggleMutation,useUpdateMenuQuantityMutation} from "../../features/api/cartApi";
import { Link } from "react-router-dom";
import useTotalPriceCalculate from "../../hooks/useTotalPriceCalculate";

const Cart = () => {
  const buttonCss ="border border-solid border-blue-500 px-1 text-blue-600 font-semibold rounded hover:bg-info hover:text-black"
  const { isLoading, data, isError} = useGetmyCartMenusQuery();
  const seletedDataForOrder = data?.filter(item => item.checked === true);
  const [checkedToggle] = useMenuCheckedToggleMutation()
  const [updateQuantity,{isSuccess : successUpdate, originalArgs, requestId}] = useUpdateMenuQuantityMutation();
  const [deleteFromCart,{isSuccess : successDelete , requestId : deletedReqId, }] = useDeleteFromCartMutation();
  
  const result = useTotalPriceCalculate();

  const handleChecked = (idMeal, checked) => {
    let checkboxTogggle = !checked
    const newData = { checked: checkboxTogggle, idMeal: idMeal };
    checkedToggle(newData);
  };

  const handleUpdateQuantity = (quantity, idMeal) => {
    const newData = { quantity: quantity, idMeal: idMeal };
    if (quantity < 1) {
      toast("You can't select less then 1", { id: originalArgs?.idMeal})
      return;
    } else if (newData) {
      updateQuantity(newData);
    }
  };

  useEffect(()=>{
    if (successUpdate) {
      toast.success("successfully update quantity", { id: requestId})
    }
  }, [successUpdate, requestId])

  useEffect(()=>{
    if (successDelete) {
      toast.success("successfully deleted", { id: deletedReqId})
    }
  }, [successDelete, deletedReqId])

  return (
    <section>
      {
        isLoading ? // check data loading
        <p className="text-center text-2xl md:text-3xl font-medium text-indigo-500 mt-2 md:mt-5">Loading...</p>
        :
        <div>
          {
            isError ? // check if error
            <p className="text-center text-2xl md:text-3xl font-medium text-red-400 mt-2 md:mt-5">Someting Went Wrong</p>
             :
             <div>
              {
                !data?.length ? // check if data length
                <p className="text-center text-2xl md:text-3xl font-medium text-indigo-500 mt-2 md:mt-5">Your cart list is empty.</p>
                :
                <div>
                   <div className="overflow-x-auto">
                     <table className="table">
                       <thead>
                         <tr className="text-xl md:text-2xl font-medium md:font-semibold">
                           <th className="text-center">menu</th>
                           <th>Thumbnail</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th>Subtotal</th>
                           <th>Delete</th>
                         </tr>
                       </thead>
                       <tbody>
                          {data?.map(
                           ({ _id, idMeal, strMeal, strMealThumb, quantity, price , checked}) => (
                             <tr key={_id} className="hover text-lg font-medium">
                               <th className="text-base text-blue-500 md:text-lg underline pl-2 pr-0 py-0 flex items-center">
                                  {
                                    checked ?
                                    <input onClick={() => handleChecked(idMeal, checked)} type="checkbox" defaultChecked className="rounded-xl checkbox [--chkbg:theme(colors.blue.500)] [--chkfg:black] mr-1" />
                                    :
                                    <input onClick={() => handleChecked(idMeal, checked)} type="checkbox" className="rounded-xl checkbox [--chkbg:theme(colors.blue.500)] [--chkfg:black] mr-1" />
                                  }
                                  {
                                     strMeal.length > 20 ?
                                     <Link to={`/food-menu/${idMeal}/${price}`} title={`${strMeal}`}>{strMeal.slice(0, 20)}...</Link>
                                        :
                                     <Link to={`/food-menu/${idMeal}/${price}`}>{strMeal}</Link>
                                  }
                               </th>
                               <td>
                                 <img
                                   className="h-12 w-12 md:h-14 md:w-14" alt="Thumbnail"
                                   src={strMealThumb}
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
                                       onClick={() => deleteFromCart(idMeal)}
                                     >
                                       <HiTrash/>
                                 </button>
                               </td>
                             </tr>
                          )
                         )}
                       </tbody>
                     </table>
                   </div>
                   <div className="flex justify-end mt-5 mb-3 mr-2 md:mr-10">
                      <p className="md:text-2xl text-blue-500 font-semibold border border-blue-500 rounded p-1">{`${seletedDataForOrder?.length} items out of ${data?.length} : $${result}`}</p>
                      <Link to='/checkout'><button className={`button ${buttonCss} md:text-2xl p-1 ml-2`}>PROCEED TO CHECKOUT</button></Link>
                   </div>
                </div>
              }
             </div>
          }
        </div>
      }
    </section>  
  );  
};

export default Cart;
