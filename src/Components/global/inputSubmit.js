import React, { Component } from 'react';
import MyButton from './Button'

export default class inputWithButton extends Component {
  state = {inputText: ''}
  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>
        <input 
          type="text" 
          value={this.state.inputText} 
          onChange={(event)=>{this.setState({inputText: event.target.value})}}
        />
        <MyButton type="submit" text="add your todo thing" outline={true} />
      </form>
    );
  }
}