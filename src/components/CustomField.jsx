import { ErrorMessage } from "formik"
import { StyledErrorMessage, StyledField, StyledLabel } from "../styles/App.Styled"

const CustomField = ({name, placeholder, type = 'text'}) => {
  return (
   <StyledLabel>
            {name}
              <StyledField type={type} name={name} placeholder={placeholder} />
               <ErrorMessage name={name} component={StyledErrorMessage} />
          </StyledLabel>
  )
}

export default CustomField