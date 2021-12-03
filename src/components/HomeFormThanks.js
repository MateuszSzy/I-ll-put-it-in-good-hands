import React,{Component} from 'react';
import "./../scss/styles/HomeFormFourth.scss";
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {MuiThemeProvider} from "material-ui";

export class HomeFormThanks extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="fourth__container">
                <div className="alert__container">
                    <h2 className="alert__title">Thanks! Success!</h2>
                    <p className="alert__description"> Dziękujemy za
                        przesłanie formularza Na maila prześlemy
                        wszelkie informacje o odbiorze.
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default HomeFormThanks;