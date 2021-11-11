import React from 'react';
import styled from 'styled-components'

const DivItem = styled.div`
border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
`

export default class ListProducts extends React.Component {
    
    render() {
        return (
            <DivItem>
                <img src={this.props.imagem}></img>
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
            </DivItem>
        )    
    }
}