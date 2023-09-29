import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {AddBlogAction} from "../../redux/action/BlogAction"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment/moment';

const CreateBlog = () => {
  const [authorName, setAuthorName] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const HandleSubmit = (e) =>{
    e.preventDefault();
    const newBlog = {
      id: new Date().getTime(),
      date: moment().format('ll'),
      author: authorName,
      subject: subject,
      content: content,
      shortContent: content.slice(0,125) + "..."
    };
    setAuthorName('')
    setContent('')
    setSubject('')
    toast("Success");
    dispatch(AddBlogAction(newBlog))
  }
  return (
    <div className='ContainBlog'>
        <div className='about create-about'>
            <span>Create Blog</span>
        </div>
        <form onSubmit={(e) => HandleSubmit(e)}>
        <div className='containerinput'>
            <div className='inputAuthorName'>
            <input placeholder='Author Name' required={true} value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            </div>
            <div className='inputSubject'>
            <input placeholder='Subject' required={true} value={subject} onChange={(e) => setSubject(e.target.value)}/>
            </div>

        </div>            
        <div className='Content'>
            <textarea placeholder='Content' required={true} value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div className='btnCreate'>
          <button type='submit'> Create</button>
          <ToastContainer />
          </div>
          </form>
    </div>
  )
}

export default CreateBlog