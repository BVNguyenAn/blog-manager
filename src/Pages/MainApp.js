import React from 'react'
import banner from '../banner.png'
import SingleBlog from "../components/blog";
import store from '../redux/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainApp = () => {   
    const Blog = useSelector(state => state.blogs)
    function checkBlog() {
        if( store.getState().blogs.blogs !== undefined){
            return store.getState().blogs.blogs
        }else {
            return Blog
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