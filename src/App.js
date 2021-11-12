import React from "react";
import styled from "styled-components";
import Filters from "./Components/Filters";
import ListProducts from "./Components/ListProducts";
import HeaderProducts from "./Components/HeaderProducts";
import Shopping from "./Components/Shopping";
import ShoppingCart from "./Components/ShoppingCart";

const DivApp = styled.div`
    display: flex;
    flex-direction: row;
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
const DivCarrinho = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`

export default class App extends React.Component {
    state = {
      valorMinimo: "",
      valorMaximo: "",
      buscaProduto: "",
      quantidadeProduto: "",
      ordenar: 1,
      carrinho: [],
      precoTotal: 0,
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
      ],

      carrinho: [
        {
          quantidade: 1,
          produto:{
            id: 1,
            imagem: "https://picsum.photos/200/200?a=2",
            nome: "Produto 1",
            preco: 100.00           
          }
        }
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

    onChangeOrdenacao = (event) => {
        this.setState({ordenar: event.target.value})
    }

    removerProduto = (id) => {
        const novaLista = this.state.carrinho.filter((produto) => {
          return produto.id !== id 
    })}

    array = ()=>{
        this.state.produtos.filter((produto) => {
          console.log(produto)
          return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLocaleLowerCase())
        })
        .filter((produto) => {
          return this.state.valorMinimo === "" || produto.preco >= this.state.valorMinimo
        })
        .filter((produto) => {
          return this.state.valorMaximo === "" || produto.preco <= this.state.valorMaximo
        })
        .sort((prod1, prod2) => {
          return this.state.ordenar * (prod1.preco - prod2.preco)
        })
    }

    addCarrinho = (event) => {
      let produtoEscolhido = this.state.produtos.filter((produto)=>{
        return produto.id === event.target.value
      })
  
      let carrinhoVazio = 0
      let carrinhoCheio = this.state.carrinho.map((item)=> {
        if (item.produto.id === event.target.value){
          item.quantidade ++
          carrinhoVazio ++          
        }
        return item
      })
      if (carrinhoVazio === 0) {
        this.setState ({
          carrinho: [...this.state.carrinho,{
            quantidade: 1,
            produto: produtoEscolhido[0]
          }]
        })
        console.log(this.state.carrinho)
      }else {
        this.state({
          carrinho: carrinhoCheio
        })
        console.log(this.state.carrinho)
      }
      

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
              <HeaderProducts
                qtdProduto = {this.state.produtos.filter((produto) => {
                  console.log(produto)
                  return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLocaleLowerCase())
                })
                .filter((produto) => {
                  return this.state.valorMinimo === "" || produto.preco >= this.state.valorMinimo
                })
                .filter((produto) => {
                  return this.state.valorMaximo === "" || produto.preco <= this.state.valorMaximo
                })
                .sort((prod1, prod2) => {
                  return this.state.ordenar * (prod1.preco - prod2.preco)
                }).length}
                ordenacao={this.onChangeOrdenacao}
                crescente={1}
                decrecente={-1}
              />
            <DivListProducts>
              {this.state.produtos.filter((produto) => {
                console.log(produto)
                return produto.nome.toLowerCase().includes(this.state.buscaProduto.toLocaleLowerCase())
              })
              .filter((produto) => {
                return this.state.valorMinimo === "" || produto.preco >= this.state.valorMinimo
              })
              .filter((produto) => {
                return this.state.valorMaximo === "" || produto.preco <= this.state.valorMaximo
              })
              .sort((prod1, prod2) => {
                return this.state.ordenar * (prod1.preco - prod2.preco)
              })
              .map((produto) => {
                return (
                  <ListProducts key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco.toFixed(2)}
                    adicionarProduto={() => this.addProduto(produto.id)}  
                  />
                )
              })
              }
            
            </DivListProducts>
            </DivProducts>
            <DivCarrinho>
              <Shopping />
                {this.state.carrinho.map((produto) =>{
                  if(produto.id === produto.id){
                    return (
                      <ShoppingCart key={produto.id}
                        qtdProdutoCarrinho={produto}
                        nomeProduto={produto.nome}
                        removerProduto={1}
                      /> 
                    ) 
                  } else {
                    return (
                      <ShoppingCart key={produto.id}
                        qtdProdutoCarrinho={produto}
                        nomeProduto={produto.nome}
                        removerProduto={1}
                      />
                    )
                  }
                })}
                <div>Total: R$ {this.state.precoTotal.toFixed(2)}</div>
          </DivCarrinho>
        </DivApp>
      );
  }
}
