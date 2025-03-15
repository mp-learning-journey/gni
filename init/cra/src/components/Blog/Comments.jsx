const Comments = ({comments}) => {
    return (
        <div className="comment">
            {
                comments.map((comment, key) => (
                    <div key={key}>
                        <h5>{comment.user}</h5>
                        <p>{comment.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments;