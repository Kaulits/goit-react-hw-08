import { NavLink } from "react-router-dom"

import { StyledHeader, StyledTitle, StyledEmail, StyledList, StyledItem, StyledNavLink } from '../styles/App.Styled';

const NavBar = () => {
  return (
    <StyledHeader>
      <div>
        <StyledTitle>Contacts</StyledTitle>
        <StyledEmail>test@user</StyledEmail>
      </div>
      <StyledList>
        <StyledItem>
          <StyledNavLink to='/' >Home</StyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledHeader>
  );
};

export default NavBar;
