import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven, homeObjEight } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Sidebar from '../components/Sidebar';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { AboutH2 } from '../components/About/AboutElements';
import { LetterImg, Year } from '../components/InfoSection/InfoElements';



const Home = () => {
    // open mobile sidebar menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        {/* pass these value to Sidebar Navbar index.js */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <About />
            <Zoom cascade duration={1000}>
                <Year yearStart={true}>2012</Year>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjOne} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjTwo} />
            </Fade>
            <Zoom cascade duration={1000}>
                <Year yearStart={false}>2013</Year>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjThree} />
            </Fade>
            <Fade bottom duration={2000}>
                <LetterImg src={require('../assets/images/letter.jpg').default} alt="letter" />
            </Fade>
            <Zoom cascade duration={1000}>
                <Year yearStart={true}>2014</Year>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjFour} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjFive} />
            </Fade>
            <Zoom cascade duration={1000}>
                <Year yearStart={false}>2020</Year>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjSix} />
            </Fade>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjSeven} />
            </Fade>
            <Zoom cascade duration={1000}>
                <Year yearStart={true}>2022</Year>
            </Zoom>
            <Fade bottom duration={2000}>
                <InfoSection {...homeObjEight} />
            </Fade>
                <AboutH2></AboutH2>
            <Gallery />
            <Footer />
        </>
    )
}

export default Home;