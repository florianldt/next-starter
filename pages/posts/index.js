import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Navigation } from '../../components/Navigation';
import { Post } from '../../components/Post';

const renderPostComponents = (posts) =>
    posts.map((post) => <Post key={post.id} post={post} />);

const Posts = ({ posts }) => (
    <Layout>
        <Head>
            <title>Posts</title>
        </Head>
        <Navigation />
        <ul>{renderPostComponents(posts)}</ul>
    </Layout>
);

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    return {
        props: { posts: json },
    };
};

export default Posts;
