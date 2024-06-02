import { Link } from "react-router-dom";
import { useGetmyCartMenusQuery } from "../../features/api/cartApi";
import useTotalPriceCalculate from "../../hooks/useTotalPriceCalculate";

const Checkout = () => {
    const { data } = useGetmyCartMenusQuery();
    const seletedDataForOrder = data?.filter(item => item.checked === true);
    const result = useTotalPriceCalculate();

    const handleSubmit = (event) =>{{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }}

    return (
        <section className="w-full flex">
           <div className="md:w-3/5">
                <h2 className="text-lg md:text-2xl text-center uppercase font-semibold italic border-indigo-500 border-b-2 py-2 mt-1 md:mt-3">Your Selected Order from Cart</h2>
              <div>
                <table className="table">
                  <thead>
                    <tr className="text-xl md:text-2xl font-medium md:font-semibold">
                      <th>menu</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                     {seletedDataForOrder?.map(
                      ({ _id, idMeal, strMeal, quantity, price }) => (
                        <tr key={_id} className="hover text-lg font-medium">
                          <th className="text-base text-blue-500 md:text-lg underline pl-2 pr-0 py-0">
                             {
                                strMeal.length > 20 ?
                                <Link to={`/food-menu/${idMeal}/${price}`} title={`${strMeal}`}>{strMeal.slice(0, 20)}...</Link>
                                   :
                                <Link to={`/food-menu/${idMeal}/${price}`}>{strMeal}</Link>
                             }
                          </th>
                          <td>
                            <div className="text-xl flex">
                                <h2 className="w-10 md:w-20 text-center">{quantity}</h2>
                            </div>
                          </td>
                          <td>${price}.00</td>
                          <td>${price * quantity}.00</td>
                        </tr>
                     )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-5 mb-3 mr-2 md:mr-10">
                  <p className="md:text-2xl text-blue-500 font-semibold border border-blue-500 rounded p-1">Total Price : ${result}</p>
               </div>
            </div>

            <div className="md:w-2/5">
               <h2 className="text-lg md:text-2xl text-center uppercase font-semibold italic border-indigo-500 border-b-2 py-2 mt-1 md:mt-3">Billing details</h2>
               <h2 className="text-base uppercase font-semibold italic pl-8 py-1 mt-1 md:mt-3">Name : </h2>
               <h2 className="text-base uppercase font-semibold italic pl-8 pt-1">Email : </h2>
                
                
                <form onSubmit={handleSubmit} className="card-body py-3">
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text">Address:</span>
                      </label>
                      <input type="text" name="address" placeholder="address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text">Number:</span>
                      </label>
                      <input type="text" name="number" placeholder="number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text">Order notes (optional):</span>
                      </label>
                      <textarea type="text" name="text" placeholder="text" className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary">Place Order</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;






// <form onSubmit={handleSubmit} className="card-body py-3">
//                     <div className="form-control">
//                       <label className="label py-0">
//                         <span className="label-text">Name</span>
//                       </label>
//                       <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                       <label className="label py-0">
//                         <span className="label-text">Email</span>
//                       </label>
//                       <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                       <label className="label py-0">
//                         <span className="label-text">Password</span>
//                       </label>
//                       <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                       <label className="label py-0">
//                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                       </label>
//                     </div>
//                     <div className="form-control mt-6">
//                       <button type="submit" className="btn btn-primary">Login</button>
//                     </div>
//                   </form>