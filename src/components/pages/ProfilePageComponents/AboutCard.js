import React from 'react';

const AboutCard = ({user}) => {
  return (
    user && (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">About</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <strong>
            <i className="fas fa-book mr-1" /> Company
          </strong>
          <p className="text-muted">{user.company.name}</p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" /> Location
          </strong>
          <p className="text-muted">
            {user.address.street}, {user.address.city}
          </p>
          <hr />
          <strong>
            <i className="fas fa-pencil-alt mr-1" /> Website
          </strong>
          <p className="text-muted">
            <span className="tag tag-danger">{user.website}</span>
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Phone
          </strong>
          <p className="text-muted">{user.phone}</p>
        </div>
        {/* /.card-body */}
      </div>
    )
  );
};

export default AboutCard;
