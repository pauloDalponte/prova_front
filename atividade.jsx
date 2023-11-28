import { useState } from 'react';
import React = require('react');

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <label htmlFor="nome">Seu nome:</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <br />
      <label htmlFor="email">Seu e-mail:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </form>
  );
}

export default function App() {
  return (
    <div className="container">
      <h2>Cadastre-se</h2>
      <FormularioCadastro />
    </div>
  );
}
