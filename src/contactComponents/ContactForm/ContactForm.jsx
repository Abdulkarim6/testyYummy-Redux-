import useAnimate from "../../hooks/useAnimate";
import toast from 'react-hot-toast';
import { useForm} from '@formspree/react';
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import { useEffect } from "react";

const ContactForm = () => {
  const buttonCss = `border border-solid border-indigo-400 p-2 font-semibold rounded bg-indigo-400 hover:bg-indigo-500 text-lg md:text-xl text-black`
  const {props : animate} = useAnimate();
  const fadeUp = animate?.children[0]?.props;

  const [state, handleSubmit] = useForm("mrgnwjna", {
    data: {
      subject: 'Someone message from tastyYummy',
    }
  });
  const {submitting, succeeded} = state;
  
  useEffect(()=>{
    if (succeeded) {
      toast.success("Thanks for message us. We'll be in touch with you soon.", { id: Math.round(Math.random()*5)})
     
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }
  }, [succeeded])

  return (
    <section>
      <SectionTitle
        subTitle="-------Send us a message---------"
        title="Contact Form"
      ></SectionTitle>
      <div
       {...fadeUp}
       className="bg-neutral mb-5 rounded">
        <form onSubmit={handleSubmit} className="card-body py-3">
          <div className="grid md:grid-cols-3 gap-2">
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Name</span>
              </label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered"  />
            </div>
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered"  />
            </div>
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Number:</span>
              </label>
              <input type="text" name="number" placeholder="number" className="input input-bordered"  />
            </div>
          </div>
            <div className="form-control">
              <label className="label py-0">
                <span className="label-text text-white p-1">Message:</span>
              </label>
              <textarea rows="5" cols="50" type="text" name="message" placeholder="message" className="text-lg textarea textarea-bordered"></textarea>
            </div>
            <div className="form-control mt-6 w-full items-center">
              <button type="submit" disabled={submitting} className={`button ${buttonCss}`}>submit message</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
{/* <p>Thanks!<button onClick={reset}>Reset</button></p> */}