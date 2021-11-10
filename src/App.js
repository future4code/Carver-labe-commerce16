import React from 'react';
import styled from 'styled-components'
import Filters from './Components/Filters';
import Products from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';

const DivApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

`
export default class App extends React.Component{
  render() {
    return (
      <DivApp>
        <Filters />
        <Products />
        <ShoppingCart />
      </DivApp>
    )
  }
}
