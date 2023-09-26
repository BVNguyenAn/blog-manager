export const AddBlogAction = (blog) => (dispatch, getState) =>{
    console.log(JSON.stringify(getState().blogs));
        dispatch({
            type: 'ADD_BLOG',
            payload: blog
        })
        console.log(JSON.stringify(getState().blogs));
        localStorage.setItem('Blogs', JSON.stringify(getState().blogs))
};