export function reducer(state = {blogs: []} , action) {
    switch (action.type) {
        case "ADD_BLOG":
            return {blogs:action.payload}
        case "DELETE_BLOG":
            return {blogs:action.payload}
        case "EDIT_BLOG":
            return {blogs:action.payload}
        default:
            return state
    }
    
}