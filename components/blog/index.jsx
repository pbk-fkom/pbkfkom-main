import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import BlogArea from './blog-area';

const Blog = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <BlogArea/>
      <Footer />
    </Wrapper>
  );
};

export default Blog;