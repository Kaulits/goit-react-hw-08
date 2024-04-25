import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"


const Login = () => {
    const handleSubmit = () => {
      toast.success('Login success')
  }
    return (
      <div>
            <AuthForm title='Login' onSubmit={handleSubmit} />
    </div>
  )
}

export default Login