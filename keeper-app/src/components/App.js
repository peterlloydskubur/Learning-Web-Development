import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

import newNotes from '../notes';

//I really suck at spread operators

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
