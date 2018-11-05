import React, { Component } from 'react';
import InputWithButton from './global/inputSubmit'
export default class List extends Component {
  state = {
    listItems: ["Milk","Eggs","Covfefe","Hyperloop Ticket"]
  }

  renderListItems() {
    return this.state.listItems.map((listItem, index)=>{
      return <li key={index}>{listItem}</li>
    });
  }

  render() {
    return (
      <div style={containerStyles}>
        <InputWithButton />
        <ul style={listStyles}>
          {this.renderListItems()}
        </ul>
      </div>
    );
  }
}

const listStyles = {
  listStyleType: "none",
  paddingTop: "10px",
}
const containerStyles = {
  textAlign: "left",
  paddingTop: "20px",
  paddingLeft: "20px"
}
