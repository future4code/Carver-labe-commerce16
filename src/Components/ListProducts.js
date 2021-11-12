import React from 'react';
import styled from 'styled-components'

const DivItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    
    p{
        margin: 5px;
    }
`

export default class ListProducts extends React.Component {
    
    render() {
        return (
            <DivItem>
                <img src={this.props.imagem}></img>
                <p>{this.props.nome}</p>
                <p>R$ {this.props.preco}</p>
                <button onClick={this.props.adicionarProduto}>Adicionar</button>
            </DivItem>
        )    
    }
}