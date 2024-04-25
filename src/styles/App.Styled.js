import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 5px gray;
  width: 400px;
  margin: 30px auto;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledBtn = styled.button`
  width: 200px;
  background-color: #4caf50;
  margin: 20px auto 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 5px gray;
  width: 400px;
  margin: 30px auto;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const StyledContactLi = styled.li`
  list-style: none;
  margin-top: 10px;
  display: flex;
  text-align: center;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
`;

export const StyledBtnDelete = styled.button`
  width: 70px;
  background-color: #f44336;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
 

export const StyledHeader = styled.div`
  background-color: #ffa247; 
  color: #fff; 
  padding: 10px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
`;

export const StyledNavTitle = styled.div`
  font-size: 24px; 
`;

export const StyledEmail = styled.h2`
  font-size: 18px; 
`;

export const StyledList = styled.ul`
  list-style-type: none; 
  display: flex; 
  gap: 10px; 
  align-items: center;
`;

export const StyledItem = styled.li`
`;


export const StyledNavLink = styled(NavLink)`
  :hover {
    color:  #f44336;
      cursor: pointer;
  }
`;

import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const StyledNotFound = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const StyledTitleNotFound = styled.h1`
  font-size: 32px;
  color: #333;
`;

export const StyledLinkNotFound = styled(NavLink)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;



export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledAuthForm = styled(Form)`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 6px 5px gray;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;



export const StyledQ = styled.p`
margin-top: 5px;

`


export const StyledLabel = styled.label`
  margin-bottom: 10px;
  display: block;
  margin-top: 10px;
`;

export const StyledErrorMessage = styled.p`
  color: red; 
  margin-top: 5px;
`;
