import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import TeamArea from "./team-area";

const Members = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <TeamArea />
      <Footer />
    </Wrapper>
  );
};

export default Members;
