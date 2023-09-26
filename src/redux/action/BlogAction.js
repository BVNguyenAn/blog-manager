export const AddBlogAction = (blog) => (dispatch, getState) =>{
        const {blogs} = getState().blogs;
        console.log(getState().blogs);
        if(blogs == []){
            dispatch({
                type: 'ADD_BLOG',
                payload:[{ 
                    author: blog.author ,
                    id : blog.id, 
                    date: blog.date,
                    subject: blog.subject,
                    shortContent: blog.shortContent, 
                    Content: blog.content}, ...blogs ]
            })
            localStorage.setItem('Blogs', JSON.stringify(getState()))
        }else {
            console.log(getState().blogs.blogs);
            dispatch({
                type: 'ADD_BLOG',
                payload:[{ 
                    author: blog.author ,
                    id : blog.id, 
                    date: blog.date,
                    subject: blog.subject,
                    shortContent: blog.shortContent, 
                    Content: blog.content}, ...getState().blogs ]
            })
            localStorage.setItem('Blogs', JSON.stringify(getState()))
        }
};