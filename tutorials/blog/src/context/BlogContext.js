import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type){
        case 'get_blogPosts':
            return action.payload;
        case 'delete_blogPost':
            return state.filter((blogPost) =>blogPost.id !== action.payload);
        case 'edit_blogPost':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
                }
                else{
                    return blogPost;
                }
            })
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({type: 'get_blogPosts', payload: response.data});
    }
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogPosts', { title, content});
        if(callback){
            callback();
        }
    }
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({type: 'delete_blogPost', payload: id});
    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogPosts/${id}`, {title, content});
        dispatch({type: 'edit_blogPost', payload: {id, title, content}});
        if(callback){
            callback();
        }
    }
}

export const [Context, Provider] = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, []);