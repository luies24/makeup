import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Home from './Home'
import ProductPage from './Components/ProductPage'
import Cart from './Components/Cart'
import {
  Route,
  Switch,
} from 'react-router-dom'


class App extends React.Component {

  state = {
    inventory: [],
    selectedProduct: [],
    cart: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/middleman')
      .then(response => response.json())
      .then(inventory => this.setState({ inventory }))
  }

  showProduct = (product) => {
    this.setState({ selectedProduct: product })
  }

  cartList = (product) => {
    this.setState({ cart: [...this.state.cart, product] })
  }

  render() {
    const { inventory } = this.state
    const { selectedProduct } = this.state
    const { cart } = this.state

    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route path="/ProductPage" render={props => <ProductPage {...props} product={selectedProduct} />} />
          <Route path="/Cart" render={props => <Cart {...props} cart={cart} />} />
          <Route path="/Home" render={props => <Home {...props} inventory={inventory} showProduct={this.showProduct} cartList={this.cartList} />} />
        </Switch>
      </div >
    );
  }
}

export default App;
