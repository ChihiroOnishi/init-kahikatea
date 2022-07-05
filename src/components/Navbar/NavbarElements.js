import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: #93ac70;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    box-shadow: ${({scrollNav}) => (scrollNav ? '0 2px 4px 0 rgba(0, 0, 0, 0.2)' : 'transition')};
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
    `

export const NavLogo = styled(LinkR)`
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 24px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #fff;
        border-bottom: 3px solid #fff;
    }

    &.active {
        border-bottom: 3px solid #fff;
    }
`

export const NavBtn = styled.nav`
    margin-right: 4%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    background: rgba(255, 255, 255, 0.2);
    color: #010606;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const NavDropdown = styled.ul`
    display: ${({display}) => (display ? 'block' : 'none')};
    right: 0;
    left: auto;
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
        0 4px 6px -2px rgba(71, 63, 79, 0.16);
    font-size: 0.875rem;
    padding: 0.5rem 0;
    list-style: none;
    background-color: #fff;
    border-radius: 0.5rem;
`

export const NavDropdownItem = styled.li`
    position: relative;
    padding: 10px 0;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(130, 168, 116, 0.3);
    }
`

export const NavDropdownLink = styled(LinkS)`
    color: #010606;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
`