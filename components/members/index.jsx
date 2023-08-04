import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import TeamArea from "./team-area";

const Members = ({ members, structurals, periode, latestPeriode }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <TeamArea
        members={members}
        structurals={structurals}
        periode={periode}
        latestPeriode={latestPeriode}
      />
      <Footer />
    </Wrapper>
  );
};

export default Members;
