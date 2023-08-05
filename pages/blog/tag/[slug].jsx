import React from "react";
import SEO from "../../../components/seo";
import { Wrapper } from "../../../layout";
import BlogMain from "../../../components/blog";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ blogs, tag }) => {
  return (
    <Wrapper>
      <SEO pageTitle={`Tag ${tag.name}`} />
      <BlogMain blogs={blogs} />
    </Wrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const res = await fetch(`${ROOT_API}/${API_VERSION}/posts/tag/${slug}`);
  let blogs = await res.json();

  if (blogs.code === 404) {
    return {
      notFound: true,
    };
  }

  const tag = blogs.tag;
  blogs = blogs.data;

  return { props: { blogs, tag } };
}
