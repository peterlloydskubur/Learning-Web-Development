import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

function Post(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.phone} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Post;
