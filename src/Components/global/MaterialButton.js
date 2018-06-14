import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
export default class MaterialButton extends Component {
    render() {
        return (
            <Button variant='raised' color='primary'>
            {this.props.text}
            </Button>
        );
    }
}