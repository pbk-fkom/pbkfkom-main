import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import AchievementArea from './achievement-area';

const Achievements = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <AchievementArea/>
      <Footer />
    </Wrapper>
  );
};

export default Achievements;