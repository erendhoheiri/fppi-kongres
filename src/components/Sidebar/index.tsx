import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
  // SidebarBtnWrap,
  // SidebarRoute
} from './SidebarElements';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: Props) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
          >
            Tujuan
          </SidebarLink>
          <SidebarLink
            to='schedule'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
          >
            Agenda
          </SidebarLink>
          <SidebarLink
            to='here'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
          >
            Bergabung
          </SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
