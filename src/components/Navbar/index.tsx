import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLink,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

interface Props {
  toggle: () => void;
}

const Navbar = ({ toggle }: Props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    console.log(window.location.pathname);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLink to='hero' smooth={true} duration={500} spy={true}>
              <h1>®</h1>
            </NavLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true}>
                  Tujuan
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='schedule' smooth={true} duration={500} spy={true}>
                  Agenda
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='here' smooth={true} duration={500} spy={true}>
                  Bergabung
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                                <NavLinks
                                    to="subscribe"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Reservas
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="location"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Lugar
                                </NavLinks>
                            </NavItem> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
