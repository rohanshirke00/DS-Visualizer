import React from 'react'
import HeroSection from '../../HeroSection'
import Algorithms from '../../Algorithms';
import {homeObjOne,homeObjThree,homeObjTwo} from './Data'

function Home() {
    return (
        <>
          <HeroSection {...homeObjOne} /> 
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <Algorithms />
        </>
    );
}

export default Home;
