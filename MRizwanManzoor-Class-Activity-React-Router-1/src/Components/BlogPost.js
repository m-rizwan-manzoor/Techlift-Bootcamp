function BlogPost(props) {

  return (
    <>
      {props.postData.map((post) => (
        <div className="card text-center mb-5" key={post.id}>
          <div className="card-header">{post.id}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
          <div className="card-footer text-muted">{post.userId}</div>
        </div>
      ))}
    </>
  );
}

export default BlogPost;
