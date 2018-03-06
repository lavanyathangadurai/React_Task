import React, { Component } from 'react';
import './App.css'
class Modal extends Component {
    modalToggle = () => {
        this.props.modalClickEvent();
    }
    render() {
        const coverClass = this.props.modalView ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.props.modalView ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div class="displayStyle">
                <button onClick={this.modalToggle}>&#x2716;</button>
                <div className={containerClass}>
                    <div className='alert'>Alert</div>
                    <div className='messageofalert'>Are you sure to delete the product?</div>
                    <div className="alertbutton">
                        <button onClick={() => { this.props.delProd(this.props.product) }}>Delete</button>
                        <button onClick={this.modalToggle} >Cancel</button>
                    </div>
                </div>
                <div className={coverClass} onClick={this.modalToggle}></div>
            </div>

        )
    }
}
export default Modal;