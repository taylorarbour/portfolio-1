import React from "react"

export default class MenuItem extends React.Component {
    render() {
        return (
           <div>
               <span>{this.props.itemPrice}</span>
            <h2>{this.props.itemName}</h2>
            <p>{this.props.itemDescription}</p>
            <button>Add To Cart</button>





            </div>
        );
        
    }
}