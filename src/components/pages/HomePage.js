import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import HomeContainer from './HomePageComponents/HomeContainer';

const HomePage = () => {
  return (
    <div>
      <Breadcrumb title="Home" />
      <HomeContainer />
    </div>
  );
};

export default HomePage;
