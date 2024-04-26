
import { RotatingLines } from 'react-loader-spinner'
import { StyledLoader } from '../styles/App.Styled'

const Loader = () => {
  return (
   <StyledLoader> <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="#dcdc03d14"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></StyledLoader>
  )
}

export default Loader
