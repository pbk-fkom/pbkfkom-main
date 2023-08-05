import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Cta from "../common/cta/cta";
import AboutArea from "./about-area";
import ServicesArea from "./services-area";

const About = ({ settings, structurals, members, quote }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <AboutArea quote={quote} settings={settings} />
      <ServicesArea structurals={structurals} members={members} />
      <Cta />
      <Footer />
    </Wrapper>
  );
};

export default About;
