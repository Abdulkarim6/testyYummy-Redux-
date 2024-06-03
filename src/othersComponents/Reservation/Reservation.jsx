import BannerShare from "../../sharedComponents/BannerShare/BannerShare";
import SectionTitle from "../../utils/SectionTitle/SectionTitle";
import useAnimate from '../../hooks/useAnimate';

const Reservation = () => {
  const buttonCss = `border border-solid border-indigo-400 p-2 font-semibold rounded bg-indigo-400 hover:bg-indigo-500 text-lg md:text-xl text-black`
  const {props} = useAnimate();
  const fadeUp = props?.children[0]?.props;

    return (
        <section className="mb-5">
            <BannerShare
               title = "Book A Table"
               subTitle = "You can book a table by online"
            ></BannerShare>
            <SectionTitle
                subTitle="-------Resevation---------"
                title="Book a table"
            ></SectionTitle>
            <form 
            {...fadeUp}
            className="card-body py-7 bg-neutral rounded">
                <div className="grid md:grid-cols-3 gap-2 md:mb-5">
                   <div className="form-control">
                     <label className="label py-0">
                       <span className="label-text text-white p-1">Name:</span>
                     </label>
                     <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label py-0">
                       <span className="label-text text-white p-1">Email:</span>
                     </label>
                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                        <label className="label py-0">
                          <span className="label-text text-white p-1">Number:</span>
                        </label>
                        <input type="text" name="number" placeholder="number" className="input input-bordered" required />
                   </div>
                </div>
                <div className="grid md:grid-cols-3 gap-2">
                   <div className="form-control">
                     <label className="label py-0">
                       <span className="label-text text-white p-1">Persons of number:</span>
                     </label>
                     <input type="number" name="person" placeholder="Persons of number" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label py-0">
                       <span className="label-text text-white p-1">Date:</span>
                     </label>
                     <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                        <label className="label py-0">
                          <span className="label-text text-white p-1">Time:</span>
                        </label>
                        <input type="time" name="number" placeholder="number" className="input input-bordered" required />
                   </div>
                </div>
                <div className="form-control mt-6 w-full items-center">
                  <button type="submit" className={`button ${buttonCss}`}>Book Table</button>
                </div>
            </form>
        </section>
    );
};

export default Reservation;