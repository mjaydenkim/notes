import React, { Component } from 'react';
import MyButton from './Button'

export default class InputWithButton extends Component {
  state = {inputText: ''}
  handleSubmission(event){
    event.preventDefault();
    this.props.onSubmit(this.state.inputText);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission.bind(this)}>
        <input 
          type="text" 
          value={this.state.inputText} 
          onChange={(event)=>{
            this.setState({inputText: event.target.value})
          }}
        />
        <MyButton type="submit" text="add your todo thing" outline={true}
        />
      </form>
    );
  }
}

InputWithButton.defaultProps = {
  onSubmit: ()=>{
    console.warn("i am hungry for methods. attach one to submit. plea's!1!1!111")
  }
}