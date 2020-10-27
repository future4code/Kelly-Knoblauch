import React from 'react';
import styled from "styled-components";

const Forms = styled.div`
    display: grid;
    justify-content: center;
`




function App() {
  return (
    <Forms>
      <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <Forms>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input />
        </Forms>
        <Forms>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="não">Não fiz curso complementar</option>
                <option value="cursoTec">Curso Técnico</option>
                <option value="cursoIngles">Curso de Inglês</option>
            </select>
        </Forms>
    </Forms>
  );
}

export default App;