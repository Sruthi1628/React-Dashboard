import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Breadcrumb from '../common/Breadcrumb';
import PostsTable from '../common/PostsTable';
import Spinner from '../common/Spinner';

const PostsPage = () => {
  const [posts, setPosts] = useState({});
  const [postLoading, setPostsLoading] = useState(true);

  useEffect(async () => {
    const posts_response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts`
    );
    await setPosts(posts_response.data);
    setPostsLoading(false);
  }, []);

  return (
    <div>
      <Breadcrumb title="Posts" />
      {postLoading ? (
        <Spinner />
      ) : posts.length <= 0 ? (
        <h5>No posts found</h5>
      ) : (
        <section className="content">
          <div className="container-fluid">
            <PostsTable posts={posts} showActions={false} />
          </div>
        </section>
      )}
    </div>
  );
};

export default PostsPage;
