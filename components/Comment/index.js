import Link from 'next/link';

export const Comment = ({ comment }) => (
    <li>
        <Link href="/comments/[id]" as={`/comments/${comment.id}`}>
            <a>
                {comment.body} | {comment.email}
            </a>
        </Link>
    </li>
);
