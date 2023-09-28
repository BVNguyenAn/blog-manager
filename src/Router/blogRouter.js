import React from 'react'
import { useParams } from 'react-router-dom';
import store from '../redux/store';

const BlogRouter = () => {
    function checkBlog() {
        if(store.getState().blogs.blogs === undefined){
            console.log(1);
            return store.getState().blogs
        }else{
            console.log(2);
            console.log(store.getState().blogs.blogs);
            return store.getState().blogs.blogs
        }
    }
    let { blogId } = useParams();
    console.log(checkBlog());
    const thisBlog = checkBlog().find(i => i.id == blogId)
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