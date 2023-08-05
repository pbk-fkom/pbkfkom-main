import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogMain from "../../components/blog";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ blogs }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogMain blogs={blogs} />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch(`${ROOT_API}/${API_VERSION}/posts`);
  let blogs = await res.json();
  blogs = blogs.data;

  return { props: { blogs }, revalidate: 60 };
}
