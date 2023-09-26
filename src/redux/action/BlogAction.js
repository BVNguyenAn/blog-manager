export const AddBlogAction = (blog) => (dispatch, getState) =>{
    console.log(getState());
        dispatch({
            type: 'ADD_BLOG',
            payload: blog
        })
};