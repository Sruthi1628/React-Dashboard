import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCardItem from './UserCardItem';
import Spinner from '../../common/Spinner';

const HomeContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/'
    );
    setUsers(response.data);
    setLoading(false);
  }, []);

  return (
    <section className="content">
      <div className="container-fluid">
        {loading ? (
          <Spinner />
        ) : users.length > 0 ? (
          <div className="row">
            {users.map(user => (
              <UserCardItem user={user} key={user.id} />
            ))}
          </div>
        ) : (
          <h5>No users found</h5>
        )}
      </div>
    </section>
  );
};

export default HomeContainer;
