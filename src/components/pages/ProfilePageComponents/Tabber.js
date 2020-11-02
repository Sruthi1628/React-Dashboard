import React from 'react';
import CommentsTable from '../../common/CommentsTable';
import PostsTable from '../../common/PostsTable';
import Todos from '../../common/Todos';

const Tabber = ({posts, todos, comments}) => {
  return (
    <div className="col-md-9">
      <div className="card">
        <div className="card-header p-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#activity" data-toggle="tab">
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline" data-toggle="tab">
                Todos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">
                Comments
              </a>
            </li>
          </ul>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <div className="tab-content">
            <div className="active tab-pane" id="activity">
              {posts.length > 0 ? (
                <PostsTable posts={posts} showActions={true} />
              ) : (
                <h5>No posts found...</h5>
              )}
            </div>
            {/* /.tab-pane */}
            <div className="tab-pane" id="timeline">
              {/* The timeline */}
              {todos.length > 0 ? (
                <Todos todos={todos} />
              ) : (
                <h5>No todos found...</h5>
              )}
            </div>
            {/* /.tab-pane */}
            <div className="tab-pane" id="settings">
              <CommentsTable comments={comments} />
            </div>
            {/* /.tab-pane */}
          </div>
          {/* /.tab-content */}
        </div>
        {/* /.card-body */}
      </div>
      {/* /.nav-tabs-custom */}
    </div>
  );
};

export default Tabber;
