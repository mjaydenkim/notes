import React, { Component } from 'react';

export default class GenericButton extends Component {
    generateClassName() {
        let baseClass = 'btn btn-';
        let colorfulButton; // second main btn class
        let sizedColorfulButton; // size css class
        // check for outline
        if (this.props.outline === true){
            colorfulButton = baseClass + 'outline-' + this.props.bootType;
        }
        else {
            colorfulButton = baseClass + this.props.bootType;
        }
        // implement size
        if (this.props.size === 'sm'){
            sizedColorfulButton = colorfulButton+' btn-sm'
        }
        else if (this.props.size === 'lg'){
            sizedColorfulButton = colorfulButton+' btn-lg'
        }
        else{
            sizedColorfulButton=colorfulButton
        }
        return sizedColorfulButton;
    }

    render() {
        return (
            <button 
                type={this.props.type}
                className={this.generateClassName()} 
                onClick={this.props.onPress}
            >{this.props.text}</button>
        );
    }
}

GenericButton.defaultProps =  {
    onPress:()=>{console.warn('attach a method to onPress or else the button is useless')},
    text: 'default text',
    size: 'sm',
    bootType: 'default',
    outline: false
}

{/* <TestButton 
            text="text" outline={true} 
            bootType="success" size="lg"
          />
          <ButtonGroup 
            onPress={this.changeNotetakingMode}
            outline={true} bootType="danger" 
            size="sm" 
            buttons={['list','long-form','canvas']}
          />
          <MaterialButton text='meep'/> */}
//example usage
