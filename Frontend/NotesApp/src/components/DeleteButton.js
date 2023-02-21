import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../assets/delete.svg'

const DeleteButton = () => {
  return (
    <Link className='delete-button'>
        <AddIcon />
    </Link>
  )
}

export default DeleteButton