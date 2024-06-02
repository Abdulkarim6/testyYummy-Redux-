import ContactBanner from "../../othersComponent/ContactBanner/ContactBanner";
import ContactForm from "../../othersComponent/ContactForm/ContactForm";
import ContactInfo from "../../othersComponent/ContactInfo/ContactInfo";

const ContactPage = () => {
    return (
        <section>
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
        </section>
    );
};

export default ContactPage;