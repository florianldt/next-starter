import Link from 'next/link';
//import styles from '../../styles/Post.module.css';

export const Post = ({ post }) => (
    <Link
        href={{ pathname: '/posts/[id]', query: { post: post } }}
        as={`/posts/${post.id}`}
    >
        <a>
            <li>{post.title}</li>
        </a>
    </Link>
);
