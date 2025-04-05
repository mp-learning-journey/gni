import Comments from "./Comment/CommentList";
import Author from "./Author";
import CommentList from "./Comment/CommentList";
import {NavLink} from "react-router-dom";

const Post = ({post}) => {

    return (
        <>
            <div className="card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>

                {/*<Author author={post.author}/>*/}
                {/*<CommentList comments={post.comments}/>*/}

                <NavLink to={"/posts/" + post.id}>Read More..</NavLink>
            </div>
        </>
    )
}

export default Post;