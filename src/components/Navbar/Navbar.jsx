import React from 'react';
import Logo from './Logo';
import '../../containers/MovieList/MovieList.css'
import { Link } from 'react-router-dom';
const UserProfile = () => {
    return(
        <div className="UserProfile">
        <div className="User">
          <div className="name">Aditya Hada</div>
          <div className="image"><img src="https://avatars1.githubusercontent.com/u/49001649?s=460&u=c3d356f90f65176d0353f8ee91a5d1b6ea538e9f&v=4" alt="profile" /></div>
        </div>
      </div> 
    )
}

const Navigation = () => {
    return(
        <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My List</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
}

const Navbar = () => {
    return(
    <header className="Header">
      <Link to="/">
    <Logo />
    </Link>
    <Navigation />
    <div id="search" className="Search">
    <input  type="search" placeholder="Search for a title..."/>
    </div>
    <UserProfile />
    </header>

    );
}

export default Navbar