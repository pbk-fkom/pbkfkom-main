import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogDetailsMain from "../../components/blog-details";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const BlogDynamicDetails = ({ blog }) => {
  return (
    <Wrapper>
      <SEO pageTitle={blog.title} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  );
};

export default BlogDynamicDetails;

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const res = await fetch(`${ROOT_API}/${API_VERSION}/posts/${slug}`);
  const blog = await res.json();

  return { props: { blog } };
}
