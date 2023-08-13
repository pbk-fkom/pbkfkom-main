import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import BlogDetailsArea from "./blog-details-area";

const BlogDetails = ({ blog, blogs, categories, tags }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <BlogDetailsArea
        blog={blog}
        blogs={blogs}
        categories={categories}
        tags={tags}
      />
      <Footer />
    </Wrapper>
  );
};

export default BlogDetails;
