import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import BlogArea from "./blog-area";
import QuoteArea from "./quote-area";
import WhyArea from "./why-area";
import HeroArea from "./hero-area";
import StructuralArea from "./structural-area";
import TeamArea from "./team-area";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <WhyArea />
      <StructuralArea />
      <TeamArea />
      <QuoteArea />
      <BlogArea />
      <Footer />
    </Wrapper>
  );
};

export default Home;
