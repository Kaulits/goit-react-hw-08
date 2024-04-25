

import { useDispatch, useSelector } from 'react-redux';
import { StyledHeader, StyledTitle, StyledEmail, StyledList, StyledItem, StyledNavLink, StyledButton } from '../styles/App.Styled';
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice';
import { logoutThunk } from '../redux/auth/operations';

const NavBar = () => {
  const user = useSelector(selectUser)
   const isLoggedIn = useSelector(selectIsLoggedIn)
 const dispatch = useDispatch()
  return (
    <StyledHeader>
        <StyledTitle>React HW 8</StyledTitle>
        <StyledEmail>{user}</StyledEmail>
      <StyledList>
        <StyledItem>
          <StyledNavLink to='/' >Home</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to='/contacts' >Contacts</StyledNavLink>
        </StyledItem>
        {!isLoggedIn && (
          <>
            <StyledItem>
              <StyledNavLink to='/login' >Login</StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink to='/register' >Register</StyledNavLink>
            </StyledItem>
          </>
        )}
        {isLoggedIn && <StyledButton onClick={() => dispatch(logoutThunk())}>Logout</StyledButton>}
      </StyledList>
    </StyledHeader>
  );
};

export default NavBar;
