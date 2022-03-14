import type { NextPage } from 'next';
import React from 'react';
import { BannerSection } from '../components/banner_section';
import { Header } from '../components/header';
import { HeaderCompensation } from '../components/header_compensation';
import { ChooseYourPlan } from '../components/choose_your_plan';
import { EcoSystem } from '../components/ecosystem';
import { Footer } from '../components/footer';

const Home: NextPage = () => {
  return (
    <React.Fragment>

      <Header />
      <HeaderCompensation/>
      
      <BannerSection />
      <ChooseYourPlan />
      <EcoSystem />
      <Footer />
    </React.Fragment>
  )
}

export default Home
