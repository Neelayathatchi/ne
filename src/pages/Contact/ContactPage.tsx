import ContactExperience from "../../components/contact/ContactExperience/ContactExperience";
import Footer from "../../components/common/Footer/Footer";

const ContactPage = () => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        background: "#ffffff",
        overflow: "visible",
      }}
    >
      <ContactExperience />

      <Footer />
    </main>
  );
};

export default ContactPage;