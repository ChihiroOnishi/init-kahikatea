import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1 } from './HeroSectionElements';
import Img from '../../assets/images/kahikatea.jpg'


const HeroSection = () => {

    return (
        <HeroContainer className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <HeroBg>
                <ImgBg src={Img} alt="Church" />
            </HeroBg>
            <HeroContent>
                <Zoom>
                    <HeroH1>KAHIKATEA</HeroH1>
                    <HeroH1>Memorial</HeroH1>
                    <HeroH1>Sculpture</HeroH1>
                </Zoom>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
