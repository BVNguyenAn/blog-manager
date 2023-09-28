export const AddBlogAction = (blog) => (dispatch, getState) =>{
    function checkBlog() {
        if(getState().blogs.blogs === undefined){
            return getState().blogs
        }else{
            return getState().blogs.blogs
        }
    }
            dispatch({
                type: 'ADD_BLOG',
                payload:[{ 
                    author: blog.author ,
                    id : blog.id, 
                    date: blog.date,
                    subject: blog.subject,
                    shortContent: blog.shortContent, 
                    content: blog.content}, ...checkBlog() ]
            })
            localStorage.setItem('Blogs', JSON.stringify(getState()))
};
export const DeleteBlogAction = (blogId) => (dispatch, getState) =>{
    function checkBlog() {
        if(getState().blogs.blogs === undefined){
            console.log(1);
            return getState().blogs
        }else{
            console.log(2);
            console.log(getState().blogs.blogs);
            return getState().blogs.blogs
        }
    }
    dispatch({
        type: 'DELETE_BLOG',
        payload: [...checkBlog()].filter((blog) => blog.id !== blogId)
    })
    localStorage.setItem('Blogs', JSON.stringify(getState()))
};
export const EditBlogAction = (blogId, newBlog) => (dispatch, getState) =>{
    function checkBlog() {
        if(getState().blogs.blogs === undefined){
            console.log(1);
            return getState().blogs
        }else{
            console.log(2);
            console.log(getState().blogs.blogs);
            return getState().blogs.blogs
        }
    }
    const editingBlog = [...checkBlog()].find(i => i.id == blogId)
    editingBlog.author = newBlog.author;
    editingBlog.subject = newBlog.subject;
    editingBlog.content = newBlog.content;
    editingBlog.shortContent = newBlog.shortContent;

    dispatch({
        type: 'EDIT_BLOG',
        payload: [...checkBlog()]
    })
    localStorage.setItem('Blogs', JSON.stringify(getState()))
};