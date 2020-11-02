import React from 'react';
import {Link} from 'react-router-dom';

const CommentsTable = ({comments}) => {
  return (
    <>
      {comments && (
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
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comments.length > 0 &&
                          comments.map(comment => (
                            <tr key={comment.id}>
                              <td>{comment.id}</td>
                              <td>{comment.body}</td>
                              <td>
                                <Link
                                  className="btn btn-primary btn-sm"
                                  to={`/posts/${comment.postId}`}
                                >
                                  <i className="fas fa-folder" />
                                </Link>
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
        </section>
      )}
    </>
  );
};

export default CommentsTable;
