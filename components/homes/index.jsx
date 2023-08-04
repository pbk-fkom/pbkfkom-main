import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import BlogArea from "./blog-area";
import QuoteArea from "./quote-area";
import WhyArea from "./why-area";
import HeroArea from "./hero-area";
import StructuralArea from "./structural-area";
import TeamArea from "./team-area";

const Home = ({ settings, blogs, structurals, members, quotes }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <HeroArea settings={settings} />
      <WhyArea structurals={structurals} members={members} />
      <StructuralArea structurals={structurals} />
      <TeamArea members={members} />
      <QuoteArea quotes={quotes} />
      <BlogArea blogs={blogs} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
