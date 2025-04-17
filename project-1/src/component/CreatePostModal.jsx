import "../styles/post.css";

function CreatePostModal({ isOpen, onClose, formData, setFormData, onSubmit, isEditing }) {
    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="body">Body</label>
                        <textarea
                            id="body"
                            name="body"
                            value={formData.body}
                            onChange={handleInputChange}
                            className="form-textarea"
                            required
                        ></textarea>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="submit-button">
                            {isEditing ? 'Update' : 'Create'}
                        </button>
                        <button type="button" onClick={onClose} className="cancel-button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePostModal;