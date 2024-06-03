import useAnimate from "../../hooks/useAnimate";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";

const ContactForm = () => {
  const buttonCss = `border border-solid border-indigo-400 p-2 font-semibold rounded bg-indigo-400 hover:bg-indigo-500 text-lg md:text-xl text-black`
  const {props} = useAnimate();
  const fadeUp = props?.children[0]?.props;

  return (
    <section>
      <SectionTitle
        subTitle="-------Send us a message---------"
        title="Contact Form"
      ></SectionTitle>
      <div
       {...fadeUp}
       className="bg-neutral mb-5 rounded">
        <form className="card-body py-3">
          <div className="grid md:grid-cols-3 gap-2">
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Name</span>
              </label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
            </div>
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control w-full">
              <label className="label py-0">
                <span className="label-text text-white p-1">Number:</span>
              </label>
              <input type="text" name="number" placeholder="number" className="input input-bordered" required />
            </div>
          </div>
            <div className="form-control">
              <label className="label py-0">
                <span className="label-text text-white p-1">Message:</span>
              </label>
              <textarea rows="5" cols="50" type="text" name="text" placeholder="text" className="text-lg textarea textarea-bordered"></textarea>
            </div>
            <div className="form-control mt-6 w-full items-center">
              <button type="submit" className={`button ${buttonCss}`}>submit message</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
