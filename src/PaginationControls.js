import React from 'react'
import { Button } from 'react-bootstrap'

const PaginatonControls = ({PerPage, usersLength, handleCLick}) => {
  
  const pageNumbers = [];

    for(let i=1; i<=Math.ceil(usersLength / PerPage); i++)
    {
      pageNumbers.push(i)
    }

  return (
    <div className="pagination-controls">
      {pageNumbers.map(number => (
        <Button 
        className="button" 
        variant="secondary" 
        key={number} 
        href="!#"
        onClick={() => handleCLick(number)}>
          {number}
        </Button>
        )
      )}
    </div>
  )
}

export default PaginatonControls;