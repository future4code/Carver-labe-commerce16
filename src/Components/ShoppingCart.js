import React from 'react';
import styled from 'styled-components'

const DivCarrinho = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    p{
        margin: 10px;
    }
`

export default class ShoppingCart extends React.Component {
    
    render() {
        return (
            <DivCarrinho>
                <p>{this.props.qtdProdutoCarrinho}x</p>
                <p>{this.props.nomeProduto}</p>
                <button onClick={this.props.removerProduto}>X</button>
            </DivCarrinho>   
        )
    }
}