import React from 'react'
import {ImSpoonKnife} from 'react-icons/im';

function Header() {
  return (
    <header className='header' style={{ backgroundImage: `url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Recipe App Reactjs</h1>
            <p>Let's have fun building this app together...</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header