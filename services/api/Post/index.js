import axios from 'axios';

export const fetchAllPost = () => axios.get('/posts');
export const fetchOnePost = (id) => axios.get(`/posts/${id}`);
export const fetchPostComments = (id) => axios.get(`/posts/${id}/comments`);
