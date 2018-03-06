import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import Modal from './modalBox';
class ProductList extends Component {
    handleClick = (e) => {
        const num = Number(e.target.id);
        this.props.producthandlePaginateClick(num);
    }
     producthandleModalDelete = (product) => {
        console.log("entered", product)
        this.props.ProductonDelete(product);
    }
    TableRow = (prod) => {
        return (
            <tr>
                <td>{prod.id}</td>
                <td>{prod.productName}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td>{prod.rol}</td>
                <td><Link to="/item-product"><button
                    onClick={() => { this.props.productonEdit(prod) }} >
                    &#x270E;</button>
                    </Link>
                    <Modal delProd={this.producthandleModalDelete} product={prod} modalView={this.props.productmodalShow} modalClickEvent={this.props.productmodalClick} />
                </td>
            </tr>
        )
    }
    Table = (currentTodos) => {
        return (<table border="1" className="tableBorder">
            <thead>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>R.O.L</th>
                <th>Action</th>
            </thead>
            {currentTodos.map(prod => {
                return this.TableRow(prod);
            })}
        </table>);
    }
    tableDisplay = (products, productcurrentPageNum, productcontentNumber) => {
        const indexOfLastTodo = productcurrentPageNum * productcontentNumber;
        const indexOfFirstTodo = indexOfLastTodo - productcontentNumber;
        const currentTodos = products.slice(indexOfFirstTodo,
            indexOfLastTodo);
        return (
            this.Table(currentTodos)
        )
    }
    paginate = (products, productcontentNumber) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productcontentNumber); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }
    render() {
        return (
            <div>

                <h1 className="alignCenter">PRODUCT LIST</h1>
                <Link to="/item-add"><button className="addBtn">Add New Product</button></Link>
                {this.tableDisplay(this.props.products, this.props.productcurrentPageNum, this.props.productcontentNumber)}
                {this.paginate(this.props.products, this.props.productcontentNumber)}
            </div>
        )
    }
}
export default ProductList;


