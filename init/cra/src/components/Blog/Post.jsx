import Comments from "./Comments";

const Post = ({post}) => {
    const handleClick = () => {
        alert(post.title);
    }
    return (
        <>
            <div className="card">
                <h3>{post.title}</h3>
                <div className="author">
                    <h4>{post.author.name}</h4>
                    <p>{post.author.bio}</p>
                </div>
                <p>{post.content}</p>

                <Comments comments={post.comments} />

                <button onClick={handleClick}>Read More..</button>
            </div>
        </>
    )
}

export default Post;