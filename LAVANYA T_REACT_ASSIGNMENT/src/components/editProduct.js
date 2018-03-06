import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
class EditProduct extends Component {
  render() {
    return (
      <div className="editPage">
        <h1 className="editpage">EDIT PRODUCT</h1>
        <div className="editpage "><label>Product Name:</label>
          <input type="text" name="productName" onChange={(e) => { this.props.onChangeEdit(e) }}
            defaultValue={this.props.editProducts.productName} />
        </div>
        <div className="editpage"><label>Price:</label>
          <input type="text" name="price" onChange={(e) => { this.props.onChangeEdit(e) }}
            defaultValue={this.props.editProducts.price} />
        </div>
        <div className="editpage "><label>Quantity</label>
          <input type="text" name="quantity" onChange={(e) => { this.props.onChangeEdit(e) }}
            defaultValue={this.props.editProducts.quantity} />
        </div>
        <div className="editpage"><label>R.O.L</label>
          <input type="text" name="rol" onChange={(e) => { this.props.onChangeEdit(e) }}
            defaultValue={this.props.editProducts.rol}/>
        </div>
        <div>
          <button onClick={(e) => { this.props.onClickEdit(this.props.editProducts) }}>SAVE</button>
          <Link to="/"><button>BACK</button></Link>
        </div>
      </div>
    );
  }
}

export default EditProduct;
