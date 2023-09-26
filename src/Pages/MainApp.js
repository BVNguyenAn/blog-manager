import React from 'react'
import banner from '../banner.png'
import SingleBlog from "../components/blog";

const MainApp = () => {    
    function checkBlog() {
        if(localStorage.getItem('Blogs') === null){
            return []
        }else {
            return JSON.parse(localStorage.getItem('Blogs')).blogs
        }
        
    }
    const ListBlog = checkBlog();
  return (
    <div className='container'>
        <img src={banner} className='banner' alt='banner'></img>
    <div className='main-app'>
        <div id='blogs' className='about'>
            <span>Blogs</span>
        </div>
        <div className='contain-blog'>
            {
                ListBlog.map((blog, index) => {
                    return(
                        <SingleBlog data={blog} key={index}/>
                    )
                })
                
            }
        </div>
    </div>
    </div>
  )
}

export default MainApp