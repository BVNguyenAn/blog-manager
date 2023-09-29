import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import store from '../../redux/store';

const BlogRouter = () => {
    const [thisBlog, setThisBlog] = useState([]);
    let { blogId } = useParams();
    useEffect(() => {
        function checkBlog() {
            if(store.getState().blogs.blogs === undefined){
                return store.getState().blogs
            }else{
                return store.getState().blogs.blogs
            }
        }
        const thisBlog = checkBlog().find(i => i.id == blogId)
        setThisBlog(thisBlog)
    })
    console.log(thisBlog);
  return (
    <div className='DetailBlog'>
        <div className='containDetail'>
            <div className='containAuthor'>
            <img className='AuthorAvatar' alt='avt' src='https://bookvexe.vn/wp-content/uploads/2023/04/chon-loc-25-avatar-facebook-mac-dinh-chat-nhat_7.jpg' width={60} height={60}></img>
            <div className='AuthorName'>
                <p>{thisBlog.author}</p>
            </div>
            </div>
            <div className='containContent'>
                <div className='Subject'>
                    <h1> {thisBlog.subject}</h1>
                    <p className='date Spec'>  {thisBlog.date}</p>
                </div>
                <div className='Content'>
                    <span >{thisBlog.content}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogRouter