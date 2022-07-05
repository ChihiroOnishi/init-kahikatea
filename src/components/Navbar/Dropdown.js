import React from 'react';
import { NavDropdown, NavDropdownItem, NavDropdownLink } from './NavbarElements';

const Dropdown = ({ submenus, dropdownOpen }) => {
  return (
    <NavDropdown display={dropdownOpen}>
        {submenus.map((submenu, index) => (
            <NavDropdownItem key={index} className="menu-items">
                <NavDropdownLink to={submenu.year}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >
                    {submenu.year}    
                </NavDropdownLink>
            </NavDropdownItem>
        ))}
    </NavDropdown>
  )
}

export default Dropdown