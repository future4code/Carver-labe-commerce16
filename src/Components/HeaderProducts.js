import React from 'react';
import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`

const DivOrdenacao = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;

    select{
        height: 20px;
    }
`

export default class HeaderProducts extends React.Component {
    

    render() {
        return (
            <DivHeader>
                <div>
                    <p>Quantidade de produtos: {this.props.qtdProduto}</p>
                </div>
                <DivOrdenacao>
                    <p>Ordenação</p>
                    <select onChange={this.props.ordenacao}>
                        <option value={this.props.crescente}>Crescente</option>
                        <option value={this.props.decrecente}>Decrescente</option>
                    </select>
                </DivOrdenacao>
            </DivHeader>
           
        )
    }
}