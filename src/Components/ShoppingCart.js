import React from 'react';
import styled from 'styled-components'

const DivShopping = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`
const DivCarrinho = styled.div`
    display: flex;
    flex-direction: row;
    
`

export default class ShoppingCart extends React.Component {
    render() {
        return (
            <DivShopping>
                <h1>Carrinho</h1>
                <DivCarrinho>
                    <p>1x</p>
                    <p>Produto</p>
                    <button>Remover</button>
                </DivCarrinho>
            </DivShopping>
        )
    }
}