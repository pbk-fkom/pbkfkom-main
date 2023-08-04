import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogMain from "../../components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogMain />
    </Wrapper>
  );
};

export default index;
