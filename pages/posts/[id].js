import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Navigation } from '../../components/Navigation';
import { fetchOnePost } from '../../services/api';

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
        <Link href={`/posts/${post.id}/comments`}>
            <a>
                <h5>See comments</h5>
            </a>
        </Link>
    </Layout>
);

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetchOnePost(id);
    return {
        props: { post: res.data },
    };
};

export default PostDetail;
