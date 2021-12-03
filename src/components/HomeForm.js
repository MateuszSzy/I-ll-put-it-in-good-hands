import React,{Component} from "react";
import HomeFormFourth from "./HomeFormFourth";


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
                    <HomeFormFourth
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>s</h1>
        }


        return (
            <div>
                <h1>form cały</h1>
            </div>
        )
    }
}

export default HomeForm