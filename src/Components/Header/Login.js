import React from 'react'

export default function login() {
  return (
    <div>
     
        <form>
       <label for="name">username</label>
       <input type="text" placeholder='username'></input>
       <label for="password">password</label>
       <input type='text' placeholder='password'></input>
       <button type='submit'>submit</button> 
    
        </form>
      
    </div>
  )
}
