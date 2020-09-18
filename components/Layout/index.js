import styles from '../../styles/Layout.module.css';

export const Layout = ({ children }) => (
    <div className={styles.container}>{children}</div>
);
