export const Comment = ({ comment }) => (
    <li>
        {comment.body} | {comment.email}
    </li>
);
