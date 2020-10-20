import React from 'react';
import styled from "styled-components";

const Forms = styled.div`
    display: grid;
    justify-content: center;
`



function App() {
  return (

    <Forms>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <Forms>
            <p>5. Qual o curso?</p>
            <input />
        </Forms>
        <Forms>
            <p>6. Qual a unidade de ensino?</p>
            <input />
        </Forms>
    </Forms>
  );
}

export default App;