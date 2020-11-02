import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import HomeContainer from './HomePageComponents/HomeContainer';

const HomePage = () => {
  return (
    <>
      <Breadcrumb title="Home" />
      <HomeContainer />
    </>
  );
};

export default HomePage;
