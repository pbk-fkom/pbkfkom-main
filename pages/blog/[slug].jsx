import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import BlogDetailsMain from '../../components/blog-details';

const BlogDynamicDetails = ({blog}) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain blog={blog}/>
    </Wrapper>
  );
};

export default BlogDynamicDetails;

export async function getServerSideProps(context) {
    const slug = context.params.slug
    const API_VERSION = process.env.NEXT_API_VERSION;
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/${API_VERSION}/posts/detail/${slug}`)
    const blog = await res.json()

    return { props: { blog } }
}