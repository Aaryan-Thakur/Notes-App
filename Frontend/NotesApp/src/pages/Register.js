import React from 'react'
import '../App.css';


const Register = () => {
  return (
    <div className='form-container'>
         <div>
              <h2 className='form-title'>Create an account</h2>

              <form>

                <div className='form-element'  >
                  <input type="text" />
                  <label className='label'  for="form3Example1cg">Your Name</label>
                </div>

                <div className='form-element' >
                  <input type="email"  />
                  <label className='label'  for="form3Example3cg">Your Email</label>
                </div>

                <div className='form-element' >
                  <input type="password"  />
                  <label className='label'  for="form3Example4cg">Password</label>
                </div>

                <div className='form-element' >
                  <input type="password"   />
                  <label className='label'  for="form3Example4cdg">Repeat your password</label>
                </div>

                <div className='form-element-button' >
                  <button id='register-button' type="button"
                    >Register</button>
                </div>


              </form>

            </div>
          </div>
  )
}

export default Register