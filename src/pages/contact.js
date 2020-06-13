import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";

import Layout from "../layout";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
