import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Ale Atório'}
          fotoUsuario={'https://picsum.photos/50/50?a=4'}
          // fotoPost={'https://picsum.photos/200/150?a=1'}
          fotoPost={'https://source.unsplash.com/random/200x150?sig=1'}
        />

        <Post
          nomeUsuario={'Ram Don'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
      </div>

    );
  }
}

export default App;
