import React from 'react'
import { Link } from "react-router-dom";
import SettingButton from './SettingButton'
const SingleBlog = (blog) => {
    const checkBlog = () => {
        if(blog.data.subject === undefined) {
            return blog.data.blog
        }else {
            return blog.data
        }
    }
    const thisBlog = checkBlog();
  return (
    <div>
                <div className='blog'>
            <div className='blog-title'>
                <div className='MainTitle'>
                    <Link to={'/blog-manager/blog/' + thisBlog.id}>
                    <span>
                    {thisBlog.subject}
                    </span>
                    </Link>
                </div>
                <SettingButton data={thisBlog.id}/>
            </div>
            <div className='blog-content'>
                <span>
                {thisBlog.shortContent}
                </span>
            </div>
            <div className='author-infor'>
                <div className='avatar'>
                    <img alt='avt' src='https://bookvexe.vn/wp-content/uploads/2023/04/chon-loc-25-avatar-facebook-mac-dinh-chat-nhat_7.jpg' width={40} height={40}></img>
                </div>
                <div className='author-name-date'>
                <div className='author-name'>
                    <p>
                        {thisBlog.author}
                    </p>
                </div>
                <div className='date'>
                    <p>
                        {thisBlog.date}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog