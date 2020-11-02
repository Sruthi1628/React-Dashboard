import Axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const PostsTable = ({posts: oldPosts, showActions}) => {
  const [posts, setPosts] = useState(oldPosts);
  const [postForm, setPostForm] = useState(null);

  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  const deletePost = async postId => {
    await Axios.delete(`http://jsonplaceholder.typicode.com/posts/${postId}`);
    const newPosts = posts.filter(post => post.id !== postId);
    setPosts(newPosts);
    Swal.fire('Post deleted successfully');
  };

  const editPost =  post => {
    setPostForm(post);
  };

  const handleChange = e => {
    setPostForm({...postForm, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const edited_response = await Axios.put(
      `http://jsonplaceholder.typicode.com/posts/${postForm.id}`,
      JSON.stringify(postForm),
      headers
    );

    const editedId = edited_response.data.id;
    const i = posts.findIndex(post => post.id === editedId);
    posts[i] = postForm;
    const updatedList = [...posts];
    await setPosts(updatedList);

    Swal.fire('Post updated successfully');

  };

  return (
    <>
      {posts && (
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div
                    className="card-body table-responsive p-0"
                    style={{height: 500}}
                  >
                    <table className="table table-head-fixed">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.length > 0 &&
                          posts.map(post => (
                            <tr key={post.id}>
                              <td>{post.id}</td>
                              <td>{post.title}</td>
                              <td>
                                <Link
                                  className="btn btn-primary btn-sm"
                                  to={`/posts/${post.id}`}
                                >
                                  <i className="fas fa-folder" />
                                </Link>
                                {showActions && (
                                  <>
                                    <button
                                      className="btn btn-info btn-sm"
                                      data-toggle="modal"
                                      data-target="#modal-lg"
                                      onClick={e => editPost(post)}
                                    >
                                      <i className="fas fa-pencil-alt" />
                                    </button>
                                    <button
                                      onClick={e => deletePost(post.id)}
                                      className="btn btn-danger btn-sm"
                                    >
                                      <i className="fas fa-trash" />
                                    </button>
                                   
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}

          {postForm && postForm !== null && (
            <div className="modal fade" id="modal-lg">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Form</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={postForm.title}
                          onChange={e => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Body</label>
                        <textarea
                          className="form-control"
                          name="body"
                          cols="30"
                          rows="5"
                          value={postForm.body}
                          onChange={e => handleChange(e)}
                        >
                          {postForm.body}
                        </textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer justify-content-between">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={e => handleSubmit(e)}
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default PostsTable;
