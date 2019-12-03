import React from 'react';

const Profile = () => {
    return (
        <section className="content">
        <img src="" alt="" className="photo" />
        <div className="info">
          <p>Anton Egorov</p>
          <small>Programmer</small>
          <p>Age: 30</p>
        </div>
        <div className="blog">
          <div className="post1">
            <p>Doing something</p>
          </div>
          <div className="post2">
            <p>Create something</p>
          </div>
        </div>
      </section>
    );
}

export default Profile;