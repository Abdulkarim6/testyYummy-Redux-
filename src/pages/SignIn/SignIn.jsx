import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { authInput, authText, authlabel } from "../../utils/classes";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const handleSubmit = (event) =>{{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
    }}


    return (
        <section className="signInBg h-full py-10 md:py-20 lg:py-5 px-[7%] md:px-[20%] lg:px-[25%]">
              <form onSubmit={handleSubmit} className="card-body md:pt-5 lg:pt-[74px] pb-3">
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Email:</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className={authInput} required />
                </div>
                <div className="form-control">
                  <label className="label py-0">
                    <span className={`label-text ${authlabel}`}>Password:</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className={authInput} required />
                  <label className="label py-1">
                    <a href="#" className={`label-text-alt ${authlabel} link link-hover hover:!text-blue-500 pl-2`}>Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button type="submit" className="btn btn-primary uppercase">Sign In</button>
                </div>
              </form>
              <div className="flex flex-col justify-center items-center">
                 <p className={authText}>You have no account? Please <Link to='/SignUp' className="text-blue-400 underline">Sign Up</Link></p>
                 <p className={`${authText} flex items-center my-2`}>or sign in with <HiOutlineChevronDoubleDown className="ml-1" /></p>
                 <div className={`label-text ${authlabel} !py-3 !px-4 flex items-center gap-10`}>
                     <FaFacebook />
                     <FaGoogle />
                 </div>
              </div>
        </section>
    );
};

export default SignIn;
