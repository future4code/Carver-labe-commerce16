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
      ordenar: 1,
      carrinho: [],
      produtos: [
        {
          id: 1,
          imagem: "https://picsum.photos/200/200?a=1",
          nome: "Produto 1",
          preco: 100.00,
        },
        {
          id: 2,
          imagem: "https://picsum.photos/200/200?a=2",
          nome: "Produto 2",
          preco: 200.00
        },
        {
          id: 3,
          imagem: "https://picsum.photos/200/200?a=3",
          nome: "Produto 3",
          preco: 300.00
        },
        {
          id: 4,
          imagem: "https://picsum.photos/200/200?a=4",
          nome: "Produto 4",
          preco: 400.00
        },
        {
          id: 5,
          imagem: "https://picsum.photos/200/200?a=5",
          nome: "Produto 5",
          preco: 500.00
        },
        {
          id: 6,
          imagem: "https://picsum.photos/200/200?a=6",
          nome: "Produto 6",
          preco: 600.00
        },
      ]
    };

    componentDidUpdate() {
      localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
    }
  
    componentDidMount() {
      let carrinhoPersistido = localStorage.getItem("carrinho");
      carrinhoPersistido = JSON.parse(carrinhoPersistido);
      this.setState({
        carrinho: carrinhoPersistido || [],
      });
    }

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
        this.setState({
          ordenar: event.target.value
        })
    }

    

    adicionarProduto = (id) => {
      const novoArray = this.state.produtos.filter((produto) => {
        return id === produto.id
      })
      
      let controleItemCarrinho = 0;
      let compararItem = this.state.carrinho.map((item) => {
  
        if(id === item.produto.id){
          item.qtd++
          
          controleItemCarrinho++
        }
        return item
      })


      if(controleItemCarrinho === 0){
        
        this.setState({carrinho: [...this.state.carrinho, {qtd: 1, produto: novoArray[0]}]})
  
      } else {
        this.setState({carrinho: compararItem})
      }
      
    }

    removerItem = (id) => {
      let controlador = 0;

      const produtoCarrinho = this.state.carrinho.map((item) => {
        if(item.produto.id ===id && item.qtd > 1){
          controlador++
          item.qtd--
        }
        return item
      })

      if(controlador === 0){
        let novoCarrinho = this.state.carrinho.filter((item) => {
          return item.produto.id !== id
        })
        this.setState({carrinho: [...novoCarrinho]})
      } else {
        this.setState({carrinho: produtoCarrinho})
      }
    }

    valorTotal = () => {
      let precoTotal = 0;

      this.state.carrinho.map((item) => {
        precoTotal += item.produto.preco * item.qtd
      })
      return precoTotal
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
                    valorBotao={produto.id}
                    adicionarProduto={() => this.adicionarProduto(produto.id)}  
                  />
                )
              })
              }
            
            </DivListProducts>
            </DivProducts>
            <DivCarrinho>
              <Shopping />
              {this.state.carrinho.map((item) => {
                
                return (
                  <ShoppingCart
                    qtdProdutoCarrinho={item.qtd}
                    nomeProduto={item.produto.nome}
                    removerProduto={() => this.removerItem(item.produto.id)}

                  />
                )
              })}
              <div>Total: R$ {this.valorTotal()}</div>
          </DivCarrinho>
        </DivApp>
      );
  }
}
