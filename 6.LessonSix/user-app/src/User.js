import React, {useContext} from 'react'
import { UserContext } from './context/UserContext'

function User({user}) {
  //console.log(user)
  //console.log(changeColor)
  const {changeColor} = useContext(UserContext)
  return (
    <div style={{background:user.color}}>
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      Color: <input value={user.color} onChange={e=> changeColor(user.id, e.target.value)}/>
      
    </div>
  )
}

export default User
