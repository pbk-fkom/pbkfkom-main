import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import ContactArea from "./contact-area";

const Contact = ({ chief, settings }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <ContactArea chief={chief} settings={settings} />
      <Footer />
    </Wrapper>
  );
};

export default Contact;
