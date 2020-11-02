import React from 'react';

const ProfileCard = ({user, posts, todos, comments}) => {
  return (
    <div className="card card-primary card-outline">
      <div className="card-body box-profile">
        <h3 className="profile-username text-center">{user.name}</h3>
        <p className="text-muted text-center">{user.email}</p>
        <ul className="list-group list-group-unbordered mb-3">
          <li className="list-group-item">
            <b>Posts</b> <a className="float-right">{posts}</a>
          </li>
          <li className="list-group-item">
            <b>Todos</b> <a className="float-right">{todos}</a>
          </li>
          <li className="list-group-item">
            <b>Comments</b> <a className="float-right">{comments}</a>
          </li>
        </ul>
      </div>
      {/* /.card-body */}
    </div>
  );
};

export default ProfileCard;
