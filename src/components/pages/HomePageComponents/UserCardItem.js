import React from 'react';
import {Link} from 'react-router-dom';

const UserCardItem = ({user}) => {
  return (
    <div className="col-md-3">
      {/* Widget: user widget style 1 */}
      <div className="card card-widget widget-user">
        {/* Add the bg color to the header using any of the bg-* classes */}
        <div className="widget-user-header bg-info-active">
          <Link to={`/user/${user.id}`}>
            <h3 className="widget-user-username">{user.name}</h3>
          </Link>
          <h5 className="widget-user-desc">{user.company.name}</h5>
        </div>
      </div>
      {/* /.widget-user */}
    </div>
  );
};

export default UserCardItem;
