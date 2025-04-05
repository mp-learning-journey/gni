import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Post from "../Blog/Post";

const SinglePost = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    async function fetchPosts() {
        try {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )

            const posts = await response.json();
            setPosts(posts);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if(loading) return <h3>Loading.......</h3>;

    return (
        <>
            <h1>Post Id: {id}</h1>
            <Post post={posts} />
        </>
    )
}

export default SinglePost;