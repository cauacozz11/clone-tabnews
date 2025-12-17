import React, { useState } from 'react';

function Home() {
  // 1. Criamos o estado "cliques" que começa em 0
  // "setCliques" é a função que usamos para atualizar esse valor
  const [cliques, setCliques] = useState(0);

  // 2. Função que será executada ao clicar no botão
  const aumentarContador = () => {
    setCliques(cliques + 1);
  };

  // Estilos simples em JavaScript (Inline CSS)
  const estiloPagina = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5'
  };

  const estiloBotao = {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: '0.3s'
  };

  return (
    <div style={estiloPagina}>
      <h1>🚀 Meu Primeiro Deploy Interativo!</h1>
      <p>Já recebeste <strong>{cliques}</strong> interações!</p>
      
      <button 
        style={estiloBotao} 
        onClick={aumentarContador}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Clica aqui para celebrar! 🎉
      </button>
    </div>
  );
}

export default Home;