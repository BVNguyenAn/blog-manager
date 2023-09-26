import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {AddBlogAction} from "../redux/action/BlogAction"
import { type } from '@testing-library/user-event/dist/type';

const CreateBlog = () => {
  const [payload, setPayload] = useState([]);
  const [AuthorName, setAuthorName] = useState('');
  const [Subject, setSubject] = useState('');
  const [Content, setContent] = useState('');
  const dispatch = useDispatch();
  const HandleSubmit = (e) =>{
    e.preventDefault();
    const Payload = {
      id: new Date().getTime(),
      author: AuthorName,
      subject: Subject,
      content: Content,
    };
    setPayload([...payload].concat(Payload));
    console.log([...payload].concat(Payload));
    dispatch(AddBlogAction([...payload].concat(Payload)))
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
          </div>
          </form>
    </div>
  )
}

export default CreateBlog