import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='bg' id='vnav'>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAwVHi8b5ClW8R0HXRrN7sdBlDMd7BKiCRgtgnNQVZg&s' alt='' width={'100px'}/>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav p-3 ">
        <li className="nav-item mx-3 fs-3">
        <Link  id='muli' to='/' >New Release </Link>
        </li>
        <li className="nav-item mx-3 fs-3">
        <Link id='muli' to='/album' >Albums </Link>
        </li>
        <li className="nav-item mx-3 fs-3">
       <Link id='muli' to='/music' >Tracks </Link>
        </li>
        <li className="nav-item mx-3 fs-3">
       <Link id='muli' to='/fav' >My Favorites </Link>
        </li>
      </ul>
           
             
           
            
          </div>
          <button id='lbt'><Link id='log' to='/login' > <i className="ri-user-3-fill p-3 fs-5"> Login/Sign Up</i></Link></button>
        </div>
      </nav>
      <hr/>
    </div>
  )
}


    
    
   
