import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

import newNotes from '../notes';

//trying to learn how to delet items from todo app

function App(props) {
  return (
    <div>
      <Header />

      {newNotes.map((post) => (
        <Note key={post.key} title={post.title} description={post.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
