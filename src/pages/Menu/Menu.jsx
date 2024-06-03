import OurMenu from "../../menuComponents/ourMenu/OurMenu";
import BannerShare from "../../sharedComponents/BannerShare/BannerShare";

const Menu = () => {
    return (
        <>
            <BannerShare
               title = "Our Food Menu!!!"
               subTitle = "Please order your favourite food."
            ></BannerShare>
            <OurMenu></OurMenu>
        </>
    );
};

export default Menu;