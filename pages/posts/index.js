import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Navigation } from '../../components/Navigation';

const Posts = () => (
    <Layout>
        <Head>
            <title>Posts</title>
        </Head>
        <Navigation />
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </Layout>
);

export default Posts;
