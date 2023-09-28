import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h2><Link to='/blog-manager/'>BLOGLOGO</Link></h2>
      </div>
        <ul className='contain-tabs'>
            <li><Link to='/blog-manager/#blogs'>Blogs</Link></li>
            <li> <Link to='/blog-manager/create'>Create New</Link></li>
        </ul>
    </div>
  )
}

export default Header