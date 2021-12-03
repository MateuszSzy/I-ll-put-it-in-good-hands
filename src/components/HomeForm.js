import React,{Component} from "react";
import HomeFormFourth from "./HomeFormFourth";
import HomeFormFirst from "./HomeFormFirst";
import HomeFormSecond from "./HomeFormSecond";
import HomeFormThird from "./HomeFormThird";
import HomeFormSum from "./HomeFormSum";
import HomeFormThanks from "./HomeFormThanks";


export class HomeForm extends Component {
    state = {
        step: 1,
        streetName: '',
        city: '',
        zipCode: '',
        phoneNumber: '',
        date: '',
        time: '',
        message: '',
    }

    //next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    }

    //previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        });
    }

    //handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const {
            streetName,
            city,
            zipCode,
            phoneNumber,
            date,
            time,
            message} = this.state;

        const values = {
            streetName,
            city,
            zipCode,
            phoneNumber,
            date,
            time,
            message};

        switch (step) {
            case 1:
                return (
                    <HomeFormFirst
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <HomeFormSecond
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <HomeFormThird
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <HomeFormFourth
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <HomeFormSum
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <HomeFormThanks
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

export default HomeForm