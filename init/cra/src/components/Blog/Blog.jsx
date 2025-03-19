import Post from "./Post";
import {useEffect, useState} from "react";

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    async function fetchPosts() {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

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
        // list of posts
        <>
            <h1>All Blog Posts</h1>
            <div className="cards">
                {
                    posts && posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </>
    )
}

export default Blog;