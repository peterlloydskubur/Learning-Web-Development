import React from 'react';

function Post(props) {
  return (
    <div className="post">
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Post;
