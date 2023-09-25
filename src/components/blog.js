import React from 'react'

const Blog = (blog) => {
    console.log(blog.children[1]);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    let date = `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  return (
    <div>
                <div className='blog'>
            <div className='blog-title'>
                <span>
                {blog.children[1].subject}
                </span>
            </div>
            <div className='blog-content'>
                <span>
                {blog.children[1].shortContent}
                </span>
            </div>
            <div className='author-infor'>
                <div className='avatar'>
                    <img alt='avt' src='https://bookvexe.vn/wp-content/uploads/2023/04/chon-loc-25-avatar-facebook-mac-dinh-chat-nhat_7.jpg' width={40} height={40}></img>
                </div>
                <div className='author-name-date'>
                <div className='author-name'>
                    <p>
                        {blog.children[1].author}
                    </p>
                </div>
                <div className='date'>
                    <p>
                        {date}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog