import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

import newNotes from '../notes';

//Re-learning some previous concepts, complex state

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
