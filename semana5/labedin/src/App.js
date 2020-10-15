import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './imagens/IMG_5805.jpeg'; 
import plantaImg from './imagens/IMG_4744.jpeg';
import aulaImg from './imagens/IMG_2345.jpeg';
import CardPequeno from'./components/CardPequeno/CardPequeno';
import logoEmail from './imagens/email.png';
import logoAdress from './imagens/download.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Kelly Knoblauch" 
          descricao="Olá, sou Kelly, estudante de Fullstack da Labenu!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div className="page-section-container">
      <CardPequeno
        image={logoEmail}
        information="Email: "
        text=" lala@labenu.com"
        />
    </div>

    <div className="page-section-container">
      <CardPequeno
        image={logoAdress}
        information="Endereço:"
        text=" Curitiba-Pr"
        />
    </div>
    

      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande 
          imagem={plantaImg}
          nome="Mãe de planta" 
          descricao='Larguei Agronomia carregando "paisagismo" e horta doméstica como hobby. Do curso também aderi o gosto por programação.' 
        />
        
        <CardGrande 
          imagem={aulaImg}
          nome="Teacher" 
          descricao="Fui professora de inglês tanto em escola quanto particular, e como tutora." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
