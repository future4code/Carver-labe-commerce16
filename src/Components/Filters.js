import React from 'react';
import styled from 'styled-components'

const DivFilter = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  height: 100vh;

`
export default class Filters extends React.Component {

    render() {
        return (
            <DivFilter>
                <h1>Filtros</h1>
                <div>
                    <h5>Valor Mínimo</h5>
                    <input value={this.props.minimoValor} onChange={this.props.onChangeValorMinimo} type="number" />
                    <h5>Valor Máximo</h5>
                    <input value={this.props.maximoValor} onChange={this.props.onChangeValorMaximo} type="number" />
                    <h5>Busca por nome</h5>
                    <input value={this.props.buscaProduto} onChange={this.props.onChangeBuscaProduto} type="text" />
                </div>
            </DivFilter>
        )
    }
}