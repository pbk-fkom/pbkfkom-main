import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import BlogArea from "./blog-area";

const Blog = ({ blogs, categories, tags }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <BlogArea blogs={blogs} categories={categories} tags={tags} />
      <Footer />
    </Wrapper>
  );
};

export default Blog;
