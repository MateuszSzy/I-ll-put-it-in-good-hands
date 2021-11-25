import {useState, useEffect} from "react";



const HomeUseForm = validate => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        message: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    };

    return {handleChange, values, handleSubmit, errors};
};

export default HomeUseForm;