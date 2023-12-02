import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjThree} from './Data'

function About() {
    return (
        <>
          <HeroSection {...homeObjThree} />
        </>
    );
}

export default About;