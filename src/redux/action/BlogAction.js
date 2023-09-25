export const AddBlogAction = (blog) => (dispatch, getState) =>{
    const {Blog:{blogs} } = getState();
        dispatch({
            type: 'ADD_BLOG',
            payload:[{id : new Date().getTime(), author : blog.author, subject: blog.subject, content: blog.content }, ...blogs]
        })
};