import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import AchievementArea from "./achievement-area";

const Achievements = ({ achievements }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <AchievementArea achievements={achievements} />
      <Footer />
    </Wrapper>
  );
};

export default Achievements;
