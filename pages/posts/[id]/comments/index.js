import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../../../components/Layout';
import { Navigation } from '../../../../components/Navigation';
import { Comment } from '../../../../components/Comment';

const renderCommentComponents = (comments) =>
    comments.map((comment) => <Comment key={comment.id} comment={comment} />);

const PostComments = ({ postId, comments }) => (
    <Layout>
        <Head>
            <title>Post #{postId} | Comments</title>
        </Head>
        <Navigation />
        <h1>Comments</h1>
        {renderCommentComponents(comments)}
    </Layout>
);

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    const json = await res.json();
    return {
        props: { comments: json },
    };
};

export default PostComments;
