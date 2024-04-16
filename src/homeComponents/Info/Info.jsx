const Info = () => {
    return (
           <div className="infoBg flex justify-center items-center rounded my-8 py-16 px-10 md:px-36">
                <div className="box rounded md:rounded-r-full text-gray-200 font-medium bg-slate-700 bg-opacity-50 p-2 md:p-5">
                    <p>Aug 20, 2029</p>
                    <p className="text-lg uppercase">Why We Are Favourite...!!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    {/* <button className="text-lg font-semibold p-1 mt-4 border-b-4 rounded-md hover:border-blue-500"></button> */}
                    <a href="#review"><button className="btn btn-outline btn-info w-56 mt-4">See Our Customer Review</button></a>
                </div>
            </div>
    );
};

export default Info;
