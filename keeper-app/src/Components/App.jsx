import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Post from './Post';

import './styles.css';

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      <Post
        name="Beyonce"
        img="https://www.efusionsoft.com/ready2go/assets/2013/09/500x500-490x490.gif"
        phone="+1 2323  2313 23 232"
        email="Contatc@email.com"
      />

      <Post
        name="Jefferson"
        img="https://www.efusionsoft.com/ready2go/assets/2013/09/500x500-490x490.gif"
        phone="+1 999 999 999"
        email="diffrent@email.com"
      />

      <Post
        name="Gunter"
        img="https://www.agrimaccari.com/en/wp-content/uploads/2015/05/girl-500x500.jpg"
        phone="+1 888 888 888"
        email="somuchdiffrent@email.com"
      />
    </div>
  );
}

export default App;
