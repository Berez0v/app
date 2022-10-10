import React from 'react'
import {Sidemenu} from '../components/Sidemenu'
import { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid'

export function UserPage() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://api.nanoit.dev/users')
      .then(response=> response.json())
      .then(data => setUsers(data))
    console.log('Render',count)
  }, [count])

  return (
    <>
    <Sidemenu></Sidemenu>
    {
      users.map(user => <div className='userField' key={v4()}>Name:{user.name}  E-mail:{user.email}</div>)
    }
    <button onClick={() => setCount(() => count + 1)}>Add</button>

    </>
  )
}

// export default UserPage