import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AchievementMain from '../components/achievements';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Prestasi'} />
      <AchievementMain/>
    </Wrapper>
  );
};

export default index;