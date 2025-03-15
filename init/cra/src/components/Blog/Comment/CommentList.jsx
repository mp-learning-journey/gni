import Comment from "./Comment";

const CommentList = ({comments}) => {
    return (
        <div className="comments">
            {
                comments.map((comment, key) => (
                    <Comment key={key} comment={comment} />
                ))
            }
        </div>
    )
}

export default CommentList;