import React from 'react';
import Fade from 'react-reveal/Fade';
import { AboutContainer, AboutWrap, AboutH2, AboutP, AboutImg } from './AboutElements';
import Img from '../../assets/images/forest.png';

const About = () => {
    return (
        <AboutContainer id="about">
            <Fade bottom duration={2000}>
                <AboutWrap>
                    <AboutP>It commemorates the 28 Japanese and all others who perished in the Christchurch earthquakes on 22nd February 2011.</AboutP>
                </AboutWrap>
            </Fade>
            <AboutImg src={Img} alt="forest" />
            <Fade bottom duration={2000}>
                <AboutWrap>
                    <AboutP>The Base of the sculpture represents the New Zealand Native Tree "KAHIKATEA".</AboutP>
                    <AboutP>The kahikatea tree grows in clumps, with  the roots and branches into twined like us today standing together  with arms linked. The Kahikatea tree grows tall and strong like a parents love for their children. The glass peak represents pure running water of a mountain stream flowing from the mountain top. The spirits of our love ones and our prayer can travel to heaven through the purity of water.</AboutP>
                </AboutWrap>
            </Fade>
            <AboutH2></AboutH2>
        </AboutContainer>
    )
}

export default About
