// src/components/ProductForm.js

import React, { useState } from 'react';

const ProductForm = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o backend
        console.log('Produto incluído:', { nome, preco, quantidade });
    };

    return (
        <div className="product-form-container">
            <h2>Incluir Produto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </div>
                <button type="submit">Incluir Produto</button>
            </form>
        </div>
    );
};

export default ProductForm;