import {useDispatch, useSelector} from "react-redux";
import Layout from "../component/Layout";
import "../styles/post.css";
import {useEffect, useState} from "react";
import CreatePostModal from "../component/CreatePostModal";
import {fetchPosts} from "../redux-toolkit/reducers/postSlice";

const PostPage = () => {
    const {posts, loading, error} = useSelector(state => state.post);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [formData, setFormData] = useState({ title: '', body: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    function handleUpdate(post) {

    }

    function handleDelete(id) {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingPost) {
            // Update existing post
            // setPosts(posts.map(post =>
            //     post.id === editingPost ? { ...post, ...formData } : post
            // ));
        } else {
            // Create new post
            const newPost = {
                id: Date.now(),
                ...formData
            };
            // setPosts([...posts, newPost]);
        }

        closeModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPost(null);
        setFormData({ title: '', body: '' });
    };

    return (
        <Layout>
            <>
                <div className="post-manager">
                    <div className="header">
                        <h1 className="title">Posts</h1>

                        <button
                            className="create-button"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Create Post
                        </button>
                    </div>
                </div>

                <div className="post-list">
                    {posts.length === 0 ? (
                        <div className="empty-state">
                            No posts available. Create one to get started!
                        </div>
                    ) : (
                        posts.map(post => (
                            <div key={post.id} className="post-item">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-body">{post.body}</p>

                                <div className="post-actions">
                                    <button
                                        onClick={() => handleUpdate(post)}
                                        className="update-button"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </>

            <CreatePostModal
                isOpen={isModalOpen}
                onClose={closeModal}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isEditing={editingPost !== null}
            />

        </Layout>
    )
}

export default PostPage;