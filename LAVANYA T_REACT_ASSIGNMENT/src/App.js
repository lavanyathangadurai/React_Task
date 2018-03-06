import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as productActions from "./actionCreators/products";
import ProductList from "./components/productList";
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';
class App extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
  }
  producthandleDelete = (prod) => {
    this.props.actions.deleteProduct(prod);
    window.location.href = "/";
  }
  producthandleOnChangeAdd = (e) => {
    console.log("onchange")
    const name = e.target.name;
    const value = e.target.value;
    const addItem = {};
    addItem[name] = value;
    this.props.actions.addInputChange(addItem);
  }
producthandleClickAdd = (productAdd) => {
    this.props.actions.addProduct(productAdd);
    window.location.href = "/";
  }
 producthandleEdit = (prod) => {
    this.props.actions.editProduct(prod);
  }
 producthandleEditChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const editItem = {};
    editItem[name] = value;
    this.props.actions.editInputChange(editItem);
  }
  producthandleClickEdit = (editProducts) => {
    this.props.actions.editSuccessProduct(editProducts);
    window.location.href = "/";
  }
  producthandlePagination = (num) => {
    this.props.actions.paginate(num);
  }
  producthandleModal = () => {
    this.props.actions.modalToggle();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <ProductList
                {...props}
                products={this.props.productsList}
                ProductonDelete={this.producthandleDelete}
                productonEdit={this.producthandleEdit}
                producthandlePaginateClick={this.producthandlePagination}
                productcurrentPageNum={this.props.productcurrentPageNumber}
                productcontentNumber={this.props.pageContentNumber}
                productmodalShow={this.props.modalStatus}
                productmodalClick={this.producthandleModal}
              />
            }
          />
          <Route
            path="/item-add"
            render={props =>
              <AddProduct
                {...props}
                tempProd={this.props.productAdd}
                onChangeAdd={this.producthandleOnChangeAdd}
                onClickAdd={this.producthandleClickAdd}
              />
            }
          />
          <Route
            path="/item-product"
            render={props =>
              <EditProduct
                {...props}
                editProducts={this.props.editProd}
                onChangeEdit={this.producthandleEditChanges}
                onClickEdit={this.producthandleClickEdit}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productsList: state.products,
    productAdd: state.addProduct,
    editProd: state.editProduct,
    productcurrentPageNumber: state.currentPage,
    pageContentNumber: state.contentPerPage,
    modalStatus: state.modalOpened
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
