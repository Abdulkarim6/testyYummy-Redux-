import { Link } from "react-router-dom";
import { authText, authlabel } from "../../utils/classes";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/authSlice/authSlice";

const SignUp = () => {
  const dispatch = useDispatch()
  const {isLoading, isSuccess, isError, error} = useSelector(state => state.auth)
  // console.log(isLoading, isSuccess, isError, error);

    const handleSubmit = (event) =>{{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, number, email, password);

        dispatch(createUser({email, password}))
    }}

    return (
        <section className="signInBg h-full py-10 md:py-20 lg:py-5 px-[10%] md:px-[20%] lg:px-[25%]">
           <form onSubmit={handleSubmit} className="card-body md:pt-5 lg:pt-[74px] pb-3">
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Name:</span>
                  </label>
                  <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Number:</span>
                  </label>
                  <input type="text" name="number" placeholder="number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Email:</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Password:</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary uppercase">Sign Up</button>
                </div>
              </form>
              <div className="flex flex-col justify-center items-center">
                  <p className={authText}>Already you have an account? Please <Link to='/SignIn' className="text-blue-400 underline">Sign In</Link></p>
                  <p className={`${authText} flex items-center my-2`}>or sign Up with <HiOutlineChevronDoubleDown className="ml-1" /></p>
                 <div className={`label-text ${authlabel} !py-3 !px-4 flex items-center gap-10`}>
                     <FaFacebook />
                     <FaGoogle />
                 </div>
              </div>
        </section>
    );
};

export default SignUp;
