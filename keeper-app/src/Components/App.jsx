import React from 'react';
import Post from './Post';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Post
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+1 2323  2313 23 232"
        email="Contatc@email.com"
      />
    </div>
  );
}

export default App;
