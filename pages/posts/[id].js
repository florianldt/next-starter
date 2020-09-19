import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Navigation } from '../../components/Navigation';

const PostDetail = ({ post }) => (
    <Layout>
        <Head>
            <title>{post.title}</title>
        </Head>
        <Navigation />
        <h1>{post.title}</h1>
        <h4>
            id: {post.id} | userId: {post.userId}
        </h4>
        {post.body.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
        ))}
    </Layout>
);

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await res.json();
    return {
        props: { post: json },
    };
};

export default PostDetail;
