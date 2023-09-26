import React from 'react'
import { Link } from "react-router-dom";

const Blog = (blog) => {
    console.log(blog.data.subject);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    let date = `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  return (
    <div>
                <div className='blog'>
            <div className='blog-title'>
                <Link to={'/blog/' + blog.data.id}>
                <span>
                {blog.data.subject}
                </span>
                </Link>
            </div>
            <div className='blog-content'>
                <span>
                {blog.data.shortContent}
                </span>
            </div>
            <div className='author-infor'>
                <div className='avatar'>
                    <img alt='avt' src='https://bookvexe.vn/wp-content/uploads/2023/04/chon-loc-25-avatar-facebook-mac-dinh-chat-nhat_7.jpg' width={40} height={40}></img>
                </div>
                <div className='author-name-date'>
                <div className='author-name'>
                    <p>
                        {blog.data.author}
                    </p>
                </div>
                <div className='date'>
                    <p>
                        {blog.data.date}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog