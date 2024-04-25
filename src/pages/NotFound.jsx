import React from 'react';
import { StyledNotFound, StyledTitleNotFound, StyledLinkNotFound } from '../styles/App.Styled';

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledTitleNotFound>Page not found</StyledTitleNotFound>
      <StyledLinkNotFound to='/'>Go to homepage</StyledLinkNotFound>
    </StyledNotFound>
  );
};

export default NotFound;
