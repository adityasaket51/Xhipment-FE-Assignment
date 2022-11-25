import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div>
      <ul className='navbar-container'>
        <Link to='/'><li className='home'>Home</li></Link>
        {/*           User Name        */}
        
        <li>{isAuthenticated && <p className='user-Name'>{user.name}</p>}</li>

        {/* Log In / Sign up  and Log Out */}

        {isAuthenticated ? <li><button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button></li> : <li><button onClick={() => loginWithRedirect()}>Log In / Sign up</button></li>}
      </ul>
    </div>
  )
}

export default Navbar