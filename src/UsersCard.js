import React from 'react'
import { Card } from 'react-bootstrap'

function UserCard(user) {
  return(
    <div> 
      <Card className="user-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>User ID: {user.user.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.user.title}</Card.Subtitle>
          <Card.Text>{user.user.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard;