export function reducer(state = {blogs: []} , action) {
    switch (action.type) {
        case "ADD_BLOG":
            return {blogs:action.payload}
        default:
            return state
    }
    
}