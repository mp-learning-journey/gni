import {comment} from "postcss";
import Post from "./Post";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Understanding React Components",
            content: "React components are the building blocks of a React application...",
            author: { name: "Jane Doe", bio: "Frontend Engineer at TechCorp" },
            comments: [
                { user: "John", content: "Great article, learned a lot!" },
                { user: "Alice", content: "Can you explain more about hooks?" },
            ],
        },
        {
            id: 2,
            title: "State Management in React",
            content: "Managing state in large applications can be challenging...",
            author: { name: "Mike Johnson", bio: "React Developer at WebWorld" },
            comments: [
                { user: "Emma", content: "Very insightful, thank you!" },
                { user: "Lucas", content: "What about Redux integration?" },
            ],
        },
    ];

    return (
        // list of posts
        <>
            <h1>All Blog Posts</h1>
            <div className="cards">
                {
                    posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </>
    )
}

export default Blog;