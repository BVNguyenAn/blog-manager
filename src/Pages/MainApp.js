import React from 'react'
import banner from '../banner.png'
import Blog from "../components/blog";
import store from '../redux/store';

const MainApp = () => {
    const blog = store.getState().blogs
    console.log(store.getState().blogs);
  return (
    <div className='container'>
        <img src={banner} className='banner' alt='banner'></img>
    <div className='main-app'>
        <div id='blogs' className='about'>
            <span>Blogs</span>
        </div>
        <div className='contain-blog'>
            {
                blog.map((blog, index) => {
                    return(
                        <Blog data={blog} key={index}/>
                    )
                })
                
            }
        </div>
    </div>
    </div>
  )
}

export default MainApp