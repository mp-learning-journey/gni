import Comments from "./Comment/CommentList";
import Author from "./Author";
import CommentList from "./Comment/CommentList";

const Post = ({post}) => {
    const handleClick = () => {
        alert(post.title);
    }
    return (
        <>
            <div className="card">
                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <Author author={post.author}/>
                <CommentList comments={post.comments}/>

                <button onClick={handleClick}>Read More..</button>
            </div>
        </>
    )
}

export default Post;