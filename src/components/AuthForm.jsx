import { Formik,  } from 'formik';
import { StyledFormWrapper, StyledField, StyledButton, StyledQ } from '../styles/App.Styled';
import { StyledAuthForm } from '../styles/App.Styled';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <StyledFormWrapper>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <StyledAuthForm>
          {type === 'register' && (
            <StyledField type='text' name='name' placeholder='Enter your name' />
          )}
          <StyledField type='text' name='email' placeholder='Enter your email' />
          <StyledField type='password' name='password' placeholder='Enter your password' />
          <StyledButton type='submit'>
            {title}
                  </StyledButton>
                  <StyledQ>You {type === 'register' ? "already have an account?" : "dont have an account?"}{'  '}
                      <Link to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? ' Login' : ' Register'}</Link>
                  </StyledQ>  
        </StyledAuthForm>
      </Formik>
    </StyledFormWrapper>
  );
};

export default AuthForm;
