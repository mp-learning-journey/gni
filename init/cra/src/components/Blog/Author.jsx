const Author = ({author}) => {
    return (
        <div className="author">
            <h4>{author.name}</h4>
            <p>{author.bio}</p>
        </div>
    )
}

export default Author;