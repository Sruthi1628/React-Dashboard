import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Spinner from '../common/Spinner';
import AboutCard from './ProfilePageComponents/AboutCard';
import ProfileCard from './ProfilePageComponents/ProfileCard';
import Tabber from './ProfilePageComponents/Tabber';

const ProfilePage = props => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [todosLoading, setTodosLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const userId = props.match.params.id;

  useEffect(async () => {
    const user_response = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}`
    );
    await setUser(user_response.data);
    setUserLoading(false);

    const todos_response = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}/todos`
    );
    await setTodos(todos_response.data);
    setTodosLoading(false);

    const posts_response = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    await setPosts(posts_response.data);
    setPostsLoading(false);

    const comments_response = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}/comments`
    );
    await setComments(comments_response.data);
    setCommentsLoading(false);
  }, []);

  return (
    <div>
      <Breadcrumb title="Profile" />
      {userLoading === true &&
      todosLoading === true &&
      postsLoading === true &&
      commentsLoading === true ? (
        <Spinner />
      ) : !user ? (
        <h5> No users found...</h5>
      ) : (
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}
                <ProfileCard
                  user={user}
                  todos={todos.length}
                  posts={posts.length}
                  comments={comments.length}
                />
                {/* /.card */}
                {/* About Me Box */}
                <AboutCard user={user} />
                {/* /.card */}
              </div>
              {/* /.col */}
              <Tabber
                user={user}
                todos={todos}
                posts={posts}
                comments={comments}
              />
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      )}
    </div>
  );
};

export default ProfilePage;
