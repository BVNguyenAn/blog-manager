import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import { useParams } from 'react-router-dom';
import { EditBlogAction } from '../redux/action/BlogAction';

const EditBlogRouter = () => {        
    const [AuthorName, setAuthorName] = useState('');
    const [Subject, setSubject] = useState('');
    const [Content, setContent] = useState('');
    const dispatch = useDispatch();
    let { blogId } = useParams();

    const HandleSubmit = (e) =>{
        e.preventDefault();
        const NewBlog = {
          author: AuthorName,
          subject: Subject,
          content: Content,
          shortContent: Content.slice(0,100) + "..."
        };
        setAuthorName('')
        setContent('')
        setSubject('')
        toast("Success");
        dispatch(EditBlogAction(blogId,NewBlog))
      }
  return (
    <div className='ContainBlog'>
    <div className='about create-about'>
        <span>Edit Blog {blogId}</span>
    </div>
    <form onSubmit={HandleSubmit}>
        <div className='containerinput'>
            <div className='inputAuthorName'>
            <input placeholder='Author Name' required={true} value={AuthorName} onChange={(e) => setAuthorName(e.target.value)}/>
            </div>
            <div className='inputSubject'>
            <input placeholder='Subject' required={true} value={Subject} onChange={(e) => setSubject(e.target.value)}/>
            </div>

        </div>            
        <div className='Content'>
            <textarea placeholder='Content' required={true} value={Content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div className='btnCreate'>
          <button type='submit'> Create</button>
          <ToastContainer />
          </div>
          </form>
</div>
  )
}

export default EditBlogRouter