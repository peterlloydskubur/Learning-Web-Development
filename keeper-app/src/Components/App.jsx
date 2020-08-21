import React from 'react';
import Post from './Post';
import contacts from '../contacts';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />

      {contacts.map((contact) => (
        <Post
          key={contact.id}
          postID={contact.id}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
