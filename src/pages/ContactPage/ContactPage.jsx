import ContactForm from "../../contactComponents/ContactForm/ContactForm";
import ContactInfo from "../../contactComponents/ContactInfo/ContactInfo";
import BannerShare from "../../sharedComponents/BannerShare/BannerShare";

const ContactPage = () => {
    return (
        <section>
            <BannerShare
               title = "Contact with us"
               subTitle = "if you want contact with us please send us a message."
            ></BannerShare>
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
        </section>
    );
};

export default ContactPage;