import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddProduct extends Component {
  render(){
    return(
      <div className="productdetails">
      <h1 className="productdetails">Add Product</h1>
      <div className="productdetails"><label>ID-No : </label>
      <input type="text" name="id" onChange={(e) =>  { this.props.onChangeAdd(e) }} />
      </div>
      <div className="productdetails"><label>Product Name:</label>
      <input type="text" name="productName" onChange={(e) => { this.props.onChangeAdd(e) }}/>
      </div>
      <div className="productdetails"><label>Price:</label>
      <input type="text" name="price" onChange={(e) => { this.props.onChangeAdd(e) }}/>
      </div>
      <div className="productdetails"><label>Quantity:</label>
      <input type="text" name="quantity" onChange={(e) => { this.props.onChangeAdd(e) }}/>
      </div>
      <div className="productdetails"><label>R.O.L:</label>
      <input type="text" name="rol" onChange={(e) => { this.props.onChangeAdd(e) }}/>
      </div>
      
      <button onClick={() => { this.props.onClickAdd(this.props.tempProd) }}>
          ADD ITEMS
        </button>
        <Link to="/"><button>BACK</button></Link>
      </div>
    );
  }
}

export default AddProduct;

