import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
   
  return (
    <div>

<nav>
    <div className='Logos'>
        <span><h2>MingleMates</h2></span>
    </div>
    <NavLink className={(e)=>{return e.isActive? "red":""}} to="/"><li>Home</li></NavLink>
    <NavLink className={(e)=>{return e.isActive? "red":""}} to="/Universty"><li><select name="category" id="category">
          <option value="Chandigarh University">Chandigarh University</option>
          <option value="LPU">LPU</option>
          <option value="CGC Landran">CGC Landran</option>
          <option value="Chitkara">Chitkara</option>
        </select></li></NavLink>
    <NavLink className={(e)=>{return e.isActive? "red":""}} to="/about"><li>About</li></NavLink>
    <NavLink className={(e)=>{return e.isActive? "red":""}} to="/contact"><li>Contacts</li></NavLink>
    <NavLink className={(e)=>{return e.isActive? "red":""}} to="/login"><li>Login</li></NavLink>
</nav>

    </div>
  )
}

export default Navbar