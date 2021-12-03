import React,{Component} from 'react';
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {MuiThemeProvider} from "material-ui";

export class HomeFormFourth extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                        hintText="enter your first name"
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default HomeFormFourth;