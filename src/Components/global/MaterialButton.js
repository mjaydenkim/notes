import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class MaterialButton extends Component {
    render() {
        return (
            <Button variant='raised' color='primary'>
            {this.props.text}
            </Button>
        );
    }
}