import React from "react";
import styled from "styled-components";
import Filters from "./Components/Filters";
import ListProducts from "./Components/ListProducts";
import HeaderProducts from "./Components/HeaderProducts";
import Shopping from "./Components/Shopping";

const DivApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const DivProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
`
const DivListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

export default class App extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaProduto: "",
    quantidadeProduto: "",
    crescente: true,
    decrescente: false,
    produtos: [
      {
        id: 1,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 1",
        preco: 100.00
      },
      {
        id: 2,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 2",
        preco: 200.00
      },
      {
        id: 3,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 3",
        preco: 300.00
      },
      {
        id: 4,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 4",
        preco: 400.00
      },
      {
        id: 5,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 5",
        preco: 500.00
      },
      {
        id: 6,
        imagem: "https://picsum.photos/200/200?a=2",
        nome: "Produto 6",
        preco: 600.00
      },
    ]
  };

  onChangeValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value,
    });
  };
  
  onChangeValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value,
    });
  };
  
  onChangeBuscaProduto = (event) => {
    this.setState({
      buscaProduto: event.target.value,
    });
  };

  ordenarCrescente = () => {
    
  }

  render() {
    
    return (
      <DivApp>
        <Filters key={this.preco}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscaProduto={this.state.buscaProduto}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscaProduto={this.onChangeBuscaProduto}
        />
        <DivProducts>
          <HeaderProducts />
          <DivListProducts>
          {this.state.produtos.filter((produto) => {
            return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLocaleLowerCase())
          })
          .filter((produto) => {
            return this.state.valorMinimo === "" || produto.preco >= this.state.valorMinimo
          })
          .filter((produto) => {
            return this.state.valorMaximo === "" || produto.preco <= this.state.valorMaximo
          })
          .map((produto) => {
            return (
              <ListProducts key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
              />
            )
          })}
          </DivListProducts>
        </DivProducts>
        <Shopping />
      </DivApp>
    );
  }
}
