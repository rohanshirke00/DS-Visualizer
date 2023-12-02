import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjThree,homeObjTwo} from './Data'

function SignUp() {
    return (
        <>
          <HeroSection {...homeObjOne} /> 
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
        </>
    );
}

export default SignUp;