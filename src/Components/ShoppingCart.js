import React from 'react';
import styled from 'styled-components'

const DivCarrinho = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export default class ShoppingCart extends React.Component {
    render() {
        return (
            <DivCarrinho>
                <p>{this.props.qtdProdutoCarrinho}x</p>
                <p>{this.props.nomeProduto}</p>
                <button onClick={this.props.removerProduto}>Remover</button>
            </DivCarrinho>   
        )
    }
}