const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="text-center flex flex-col justify-center items-center mt-8 mb-7">
            <p className="text-base uppercase font-medium pb-3">{subTitle}</p>
            <h3 className="text-2xl uppercase font-semibold italic border-indigo-500 border-y-4 py-3">{title}</h3>
        </div>
    );
};

export default SectionTitle;