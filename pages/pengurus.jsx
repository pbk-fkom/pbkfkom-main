import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import MemberMain from "../components/members";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Pengurus"} />
      <MemberMain />
    </Wrapper>
  );
};

export default index;
