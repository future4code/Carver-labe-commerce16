import React from 'react';
import styled from 'styled-components'

const DivFilter = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    height: 100vh;

    input{
        margin-bottom: 20px;
    }

`
export default class Filters extends React.Component {

    render() {
        return (
            <DivFilter>
                <h1>Busca</h1>
                <div>
                    
                    <input placeholder="Valor Mínimo" value={this.props.minimoValor} onChange={this.props.onChangeValorMinimo} type="number" />
                    <br/>
                    <input placeholder="Valor Máximo" value={this.props.maximoValor} onChange={this.props.onChangeValorMaximo} type="number" />
                    <br/>
                    <input placeholder="Busca por nome" value={this.props.buscaProduto} onChange={this.props.onChangeBuscaProduto} type="text" />
                </div>
            </DivFilter>
        )
    }
}