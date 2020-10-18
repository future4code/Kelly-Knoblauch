import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";

const Campos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
`

class App extends React.Component {
  state = {
    postage: [
      {
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50?a=3',
      fotoPost: 'https://picsum.photos/200/150'
    },

    {  
      nomeUsuario: 'Ale Atório',
      fotoUsuario: 'https://picsum.photos/50/50?a=4',
        // fotoPost: 'https://picsum.photos/200/150?a=1'
      fotoPost: 'https://source.unsplash.com/random/200x150?sig=1'
    } ,

    {   
      nomeUsuario:'Ram Don',
      fotoUsuario:'https://picsum.photos/50/50?a=5',
      fotoPost:'https://picsum.photos/200/150?a=2'
    }

    ],

    inputUsername: "",
    inputProfile: "",
    inputPost: ""
  };

  addPost = () => { //como adicionar um post
    const newPost={
      nomeUsuario: this.state.inputUsername,
      fotoUsuario: this.state.inputProfile,
      fotoPost: this.state.inputPost

    
    }

    const copyPostage = [...this.state.postage, newPost]  //pegar estrutura de posts ja existentes para adiconar o novo post a eles

    this.setState(
      {postage: copyPostage, 
      inputUsername: "",
      inputProfile: "",
      inputPost: ""
      })
    
  }

  onChangeUsername = (event) => {
    this.setState({inputUsername: event.target.value})
  }

  onChangeProfile = (event) => {
    this.setState({inputProfile: event.target.value})
  }

  onChangePost = (event) => {
    this.setState({inputPost: event.target.value})
  }
        

      
    render() {
      const postList = this.state.postage.map((post) => {
        return (
          <div className={'app-container'}>
            <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}/>
          </div>
        )
      })
      return (
        <div>
          <Campos>
            <input
              value={this.state.inputUsername}
              onChange={this.onChangeUsername}
              placeholder={"Nome do usuáro"}
            />

            <input
              value={this.state.inputProfile}
              onChange={this.onChangeProfile}
              placeholder={"link para foto de perfil"}
            />

            <input
              value={this.state.inputPost}
              onChange={this.onChangePost}
              placeholder={"link de imagem"}
            />   
            
            <button onClick={this.addPost}>Postar</button>
          </Campos>

          <div>
            {postList}
          </div>
        </div>
        

    );
  }
}

export default App;
