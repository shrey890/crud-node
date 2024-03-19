import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to='/'>home</Link>
        <Link to='register'>Register</Link>
        <Link to='login'>login</Link>
    </div>
  )
}

export default Header