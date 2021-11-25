export default function HomeValidateInfo(values) {
    let errors = {};


    //name
    if (!values.name) {
        errors.name = 'Name required';
    }
    if (values.name.length < 2) {
        errors.name = 'Name too short';
    }
    else if (!values.name.match(/^[a-zA-Z]+$/)) {
        errors.name = 'Only letters, no spaces';
    }



    //message
    if (!values.message) {
        errors.message = 'Message is required';
    } else if (values.message.length < 120) {
        errors.message = 'The message must be at least 120 characters long  ';
    }

    //email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //password
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }


    //password2
    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}
