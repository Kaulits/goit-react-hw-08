import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"


const Register = () => {
    const handleSubmit = (values) => {
        toast.info('Register success')
    }
      const initialValues = {
        name: '',
        email: '',
        password: '',
}
  return (

      <AuthForm title='Register' onSubmit={handleSubmit} initialValues={initialValues} type='register'/>
 
  )
}

export default Register
