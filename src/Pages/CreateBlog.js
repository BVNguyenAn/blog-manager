import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {AddBlogAction} from "../redux/action/BlogAction"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateBlog = () => {
  const [AuthorName, setAuthorName] = useState('');
  const [Subject, setSubject] = useState('');
  const [Content, setContent] = useState('');
  const dispatch = useDispatch();
  const HandleSubmit = (e) =>{
    e.preventDefault();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const NewBlog = {
      id: new Date().getTime(),
      date: `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
      author: AuthorName,
      subject: Subject,
      content: Content,
      shortContent: Content.slice(0,125) + "..."
    };
    setAuthorName('')
    setContent('')
    setSubject('')
    toast("Success");
    dispatch(AddBlogAction(NewBlog))
  }
  return (
    <div className='ContainBlog'>
        <div className='about create-about'>
            <span>Create Blog</span>
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

export default CreateBlog