import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
import logo from '../../assets/images/logo.png'
import chihiro from '../../assets/images/chihirologo.png'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink href="https://www.cardboardcathedral.org.nz/">Christchurch Transitional Cathedral</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink href="https://www.tcfl.ac.jp/">Toyama College of Foreign Languages</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <FooterLink to="/" onClick={toggleHome}><img src={logo} width="70px" /></FooterLink>
                        <WebsiteRights>{new Date().getFullYear()} &copy; KAHIKATEA Memorial Sculpture</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <img src={chihiro} alt="chihiro" width="30px" />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
