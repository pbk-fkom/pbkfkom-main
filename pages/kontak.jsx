import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactMain from '../components/contact';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Kontak'} />
      <ContactMain/>
    </Wrapper>
  );
};

export default index;