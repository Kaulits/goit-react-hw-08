

const AuthForm = ({title, onSubmit}) => {
  return (
      <div>{title}
      <button onClick={onSubmit}>Click</button>
      </div>
  )
}

export default AuthForm