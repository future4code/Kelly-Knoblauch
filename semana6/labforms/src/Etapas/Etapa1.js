import React from 'react';
import styled from "styled-components";

const Forms = styled.div`
    display: grid;
    justify-content: center;
`




function App() {
    return (
    <Forms>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <Forms>
            <p>1. Qual o seu nome?</p>
            <input />
        </Forms>
        <Forms>
            <p>2. Qual sua idade?</p>
            <input />
        </Forms>
        <Forms>
            <p>3. Qual seu e-mail?</p>
            <input />
        </Forms>
        <Forms>
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value="EMIncompleto">Ensino Médio Incompleto</option>
                <option value="EMCompleto">Ensino Médio Completo</option>
                <option value="ESIncompleto">Ensino Superior Incompleto</option>
                <option value="ESIncompleto">Ensino Superior Completo</option>
            </select>
        </Forms>
    </Forms>
  );
}

export default App;