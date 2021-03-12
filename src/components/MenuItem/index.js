import React from "react"

export default class MenuItem extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = {
            bool: false
        }
    }
    changetoTrue(){
        this.setState({bool:true});
    }
    render()
        {
        return (
           <div>
               <span>{this.props.itemPrice}</span>
            <h2>{this.props.itemName}</h2>
            <p>{this.props.itemDescription}</p>
            <img src={this.props.imgFile} alt=""/>
            {
                !this.state.bool
                ? <button onClick={() => this.changetoTrue()}>Request a Quote</button>
                : <p>Request Sent!</p>
            }
          
            </div>);
        }
    }