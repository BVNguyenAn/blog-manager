import React from 'react'
import { useDispatch } from "react-redux";
import { DeleteBlogAction } from '../redux/action/BlogAction';
const DeleteButton = (id) => {
    const dispatch = useDispatch()
    const blogID = id.data.data
    const HandleDelete = (id) => {
        dispatch(DeleteBlogAction(blogID))
    }
  return (
    <button className='DeleteBtn' onClick={HandleDelete}>Delete</button>
  )
}

export default DeleteButton