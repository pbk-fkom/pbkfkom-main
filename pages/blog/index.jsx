import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogMain from "../../components/blog";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const index = ({ blogs, categories, tags }) => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogMain blogs={blogs} categories={categories} tags={tags} />
    </Wrapper>
  );
};

export default index;

export async function getStaticProps(context) {
  const resBlogs = await fetch(`${ROOT_API}/${API_VERSION}/posts`);
  let blogs = await resBlogs.json();
  blogs = blogs.data;

  const resCategories = await fetch(`${ROOT_API}/${API_VERSION}/categories`);
  let categories = await resCategories.json();
  categories = categories.data;

  const resTags = await fetch(`${ROOT_API}/${API_VERSION}/tags`);
  let tags = await resTags.json();
  tags = tags.data;

  return { props: { blogs, categories, tags }, revalidate: 60 };
}
