import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

function Navbar() {

  const isUserSignedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="navbar">
        <Link to='/'><h1>AuthDB</h1></Link>
        <ul className="menu">
          {isUserSignedIn ? (
            <>
              <Link to='/account'><li>Account</li></Link>
              <Link to='/crud'><li>Crud</li></Link>
              <li><button onClick={handleSignOut} className="signOut">Sign Out</button></li>
            </>
          ): (
            <>
             <Link to='/login'><li>Login</li></Link>
             <Link to='/signup'><li>SignUp</li></Link>
            </>
          )}
            
        </ul>
    </nav>
  )
}

export default Navbar;


//=======1st Time===========
// return (
//     <nav className="navbar">
//         <Link to='/'><h1>AuthDB</h1></Link>
//         <ul className="menu">
//             <Link to='/login'><li>Login</li></Link>
//             <Link to='/signup'><li>SignUp</li></Link>
//         </ul>
//     </nav>
// );






