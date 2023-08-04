import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import MemberDetailArea from "./member-detail-area";

const MemberDetails = ({ member }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <MemberDetailArea member={member} />
      <Footer />
    </Wrapper>
  );
};

export default MemberDetails;
