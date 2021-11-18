import React from 'react';
import styled from 'styled-components'

const DivShopping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default class ShoppingCart extends React.Component {
    render() {
        return (
            <DivShopping>
                <h1>Carrinho</h1>
            </DivShopping>
        )
    }
}