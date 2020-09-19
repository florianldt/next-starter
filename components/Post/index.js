import Link from 'next/link';
//import styles from '../../styles/Post.module.css';

export const Post = ({ post }) => (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a>
            <li>{post.title}</li>
        </a>
    </Link>
);
