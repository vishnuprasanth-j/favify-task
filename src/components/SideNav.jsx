import React from 'react'
import './SideNav.scss'
import{ NavLink} from 'react-router-dom'

import {ReactComponent as Homeicon} from '../assets/home_black_24dp.svg'
import {ReactComponent as Faviotriteicon} from '../assets/star_black_24dp.svg'
import {ReactComponent as Searchicon} from '../assets/search_black_24dp.svg'
import {ReactComponent as Playlisticon} from '../assets/playlist_add_black_24dp.svg'



const SideNav = () => {


  return (
    <div className="sidenav">
    <input type="checkbox" id="menu" />
    <label className="icon" htmlFor="menu">
      <div className="menu"></div>
    </label>
  
   {/* <div className="sidebar-header">
      <h3>Favify</h3>
    </div>*/}
  
    <nav className="nav-sidenav">
      <ul style={{padding:0}}>
        <NavLink to="/home" >
          <li style={{listStyle:'none'}}>
            <Homeicon className='icons'/>
            <div className="menu-text">Home</div>
          </li>
        </NavLink>
  
        <NavLink to="/search">
          <li style={{listStyle:'none'}}>
            <Searchicon className='icons'/>
            <div className="menu-text">Search</div>
          </li>
        </NavLink>
  
        <NavLink to="/faviorites" >
          <li style={{listStyle:'none'}}>
            <Faviotriteicon className='icons'/>
            <div className="menu-text">Faviorite</div>
          </li>
        </NavLink>
  
        <NavLink to="/playlist">
          <li style={{listStyle:'none'}}>
            <Playlisticon className='icons'/>
            <div className="menu-text">Playlist</div>
          </li>
        </NavLink>
      </ul>
    </nav>
  </div>
 
  )
}

export default SideNav