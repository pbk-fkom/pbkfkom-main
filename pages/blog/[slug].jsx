import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import BlogDetailsMain from "../../components/blog-details";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const BlogDynamicDetails = ({ blog, blogs, categories, tags }) => {
  return (
    <Wrapper>
      <SEO pageTitle={blog.title} />
      <BlogDetailsMain
        blog={blog}
        blogs={blogs}
        categories={categories}
        tags={tags}
      />
    </Wrapper>
  );
};

export default BlogDynamicDetails;

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const resBlogs = await fetch(`${ROOT_API}/${API_VERSION}/posts`);
  let blogs = await resBlogs.json();
  blogs = blogs.data;

  const resCategories = await fetch(`${ROOT_API}/${API_VERSION}/categories`);
  let categories = await resCategories.json();
  categories = categories.data;

  const resTags = await fetch(`${ROOT_API}/${API_VERSION}/tags`);
  let tags = await resTags.json();
  tags = tags.data;

  const res = await fetch(`${ROOT_API}/${API_VERSION}/posts/${slug}`);
  let blog = await res.json();

  if (blog.code === 404) {
    return {
      notFound: true,
    };
  }

  blog = blog.data;

  return { props: { blog, blogs, categories, tags } };
}
