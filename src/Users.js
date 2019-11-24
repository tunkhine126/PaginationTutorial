import React from 'react'
import UsersCard from './UsersCard'
import { CardGroup } from 'react-bootstrap'

function Users(props) {
  const users = props.users
  return(
    <div className="user-container">
      <CardGroup className="justify-content-md-center">
        {users.map(user => <UsersCard key={user.id} user={user}/> )}  
      </CardGroup>
    </div>
  )
}

export default Users;