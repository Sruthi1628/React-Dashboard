import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Spinner from '../common/Spinner';

const PostItemPage = ({match}) => {
  const id = match.params.postId;

  const [post, setPost] = useState({});
  const [postLoading, setPostLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(async () => {
    const post_response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );
    setPost(post_response.data);
    setPostLoading(false);

    const comments_response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComments(comments_response.data);
    setCommentsLoading(false);
  }, []);

  return (
    <>
      <Breadcrumb title="Post" />
      {postLoading && commentsLoading ? (
        <Spinner />
      ) : !post || post === null ? (
        <h5>No posts found...</h5>
      ) : (
        <section className="content">
          <div className="card">
            <div className="card-body">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    <div className="post">
                      {/* <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user1-128x128.jpg"
                          alt="user image"
                        /> */}
                      <span className="username">
                        <a href="#">{post.title}</a>
                      </span>
                      {/* <span className="description">
                          Shared publicly - 7:45 PM today
                        </span> */}

                      {/* /.user-block */}
                      <p>{post.body}</p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> {comments.length}{' '}
                          Comments
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4>Comments</h4>
            </div>
            <div className="card-body">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    {comments.length <= 0 ? (
                      <h5>No comments for this post...</h5>
                    ) : (
                      comments.map(comment => (
                        <div className="post" key={comment.id}>
                          <div className="user-block">
                            <img
                              className="img-circle img-bordered-sm"
                              src="../../dist/img/user1-128x128.jpg"
                              alt="user image"
                            />
                            <span className="username">
                              <a href="#">{comment.name}</a>
                            </span>
                            <span className="description">{comment.email}</span>
                          </div>
                          {/* /.user-block */}
                          <p>{comment.body}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostItemPage;
