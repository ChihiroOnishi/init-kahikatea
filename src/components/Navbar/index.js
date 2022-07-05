import React, { useEffect, useState } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import Dropdown from './Dropdown';
import { FaBars } from 'react-icons/fa';
// all icons style to be controlled by IconContext.Provider
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const menuItems = [
        {
            id: "about",
            title: "About"
        },
        {
            id: "stories",
            title: "Stories",
            submenu: [
                {year: '2011'},
                {year: '2012'},
                {year: '2013'},
                {year: '2014'},
                {year: '2015'},
                {year: '2016'},
                {year: '2017'},
                {year: '2018'},
                {year: '2019'},
                {year: '2020'},
            ]
        },
        {
            id: "gallery",
            title: "Gallery"
        },
    ];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // change color of navbar when scroll down
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav>
                <NavbarContainer  scrollNav={scrollNav}>
                    <NavLogo to="/" onClick={toggleHome}>KAHIKATEA<br />Sculpture</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {menuItems.map((item, index) => {
                            return (
                                <NavItem key={index}>
                                    {item.submenu
                                        ? (
                                            <>
                                                <NavLinks to={item.id}
                                                        smooth={true}
                                                        duration={500}
                                                        spy={true}
                                                        exact="true"
                                                        offset={-80} // activeClass="active" and add .active in css
                                                        aria-expanded={dropdownOpen ? "true" : "false"}
                                                        onClick={() => setDropdownOpen(toggle => !toggle)}
                                                        >
                                                    {item.title}
                                                </NavLinks>
                                                <Dropdown submenus={item.submenu}
                                                        dropdownOpen={dropdownOpen} />
                                            </>
                                        )
                                        : (
                                            <NavLinks to={item.id}
                                                    smooth={true}
                                                    duration={500}
                                                    spy={true}
                                                    exact="true"
                                                    offset={-80} // activeClass="active" and add .active in css
                                                    >
                                                {item.title}
                                            </NavLinks>
                                        )
                                    }
                                </NavItem>
                            );
                        })}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                            Contact
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
