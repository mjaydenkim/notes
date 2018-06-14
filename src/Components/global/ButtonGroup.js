import React, { Component } from 'react';
import Button from './Button';
export default class ButtonGroup extends Component {
    state = { selectedButton:0 }
    constructor(props){
        super(props)
        this.notifyButtonPress = this.notifyButtonPress.bind(this)
    }
    notifyButtonPress(buttonIndex) {
        console.log("tset buttno prees")
        console.log(buttonIndex)
        this.setState({selectedButton:buttonIndex});
        this.props.onPress(buttonIndex);
    }

    render() {
        return this.props.buttons.map(
            (text, index)=>{
                return(
                    <Button 
                    onPress={()=> this.notifyButtonPress(index)}
                    text={text} 
                    key={index}
                    outline={this.props.outline} 
                    bootType={this.props.type} 
                    size={this.props.size}
                    />
                );
            }
        );
    }
}
ButtonGroup.defaultProps =  {
    onPress:()=>{console.warn('attach a method to onPress or else all the buttons are useless which is even worse :(')},
    text: 'default text',
    size: 'sm',
    type: 'default',
    outline: false
}
