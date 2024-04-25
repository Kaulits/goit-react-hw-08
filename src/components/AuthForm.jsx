import { Formik } from 'formik';
import { StyledFormWrapper, StyledButton, StyledQ, StyledAuthForm, } from '../styles/App.Styled';
import { Link } from 'react-router-dom';
import CustomField from './CustomField';


const AuthForm = ({ title, onSubmit, initialValues, type, validationSchema }) => {
  return (
    <StyledFormWrapper>
      <Formik validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues}>
        <StyledAuthForm>
          {type === 'register' && (
            <CustomField name='name' placeholder='Enter your name' />
  
          )}
           <CustomField name='email' placeholder='Enter your email' />
           <CustomField name='password' type='password' placeholder='Enter your password' />
        
          <StyledButton type='submit'>
            {title}
          </StyledButton>
          <StyledQ>
            You {type === 'register' ? "already have an account?" : "dont have an account?"}{'  '}
            <Link to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? ' Login' : ' Register'}</Link>
          </StyledQ>  
        </StyledAuthForm>
      </Formik>
    </StyledFormWrapper>
  );
};

export default AuthForm;
