import React from 'react'
import "./login.css"

const Login = () => {
  return (
   
       <div className="boxL">
          <h2>Login</h2>
         <form action="">
          <div className="ip-f">
          
            <input type="text" name="Username" id="" placeholder='User-Name' />
          </div>

          <div className="ip-f">
          
            <input type="password" name="Password" id="" placeholder='Password' />
          </div>

          <div className="ip-f">
          
            <input type="password" name="Conform password" id="" placeholder='Conform password' />
          </div>

          

          <div className="btn">
            <button>Login</button>
           
          </div>

          <p>Forget password? <a href="">Click here</a></p>
          
          <div className="sign-up">
            <button>Sign-up</button>
          </div>
         </form>
       </div>
  )
}

export default Login
