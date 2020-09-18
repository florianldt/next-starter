import Link from 'next/link';
import styles from '../../styles/Navigation.module.css';

export const Navigation = () => (
    <div className={styles.navigation}>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </div>
);
