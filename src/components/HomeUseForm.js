import {useState, useEffect} from "react";
import {db} from "../firebase";




const HomeUseForm = validate => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader,setLoader] = useState(false);


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
        setLoader(true)

        db.collection('contacts').add({
            name:values.name,
            email:values.email,
            message:values.message,
        })
            .then(() => {
                alert('The request has been sent');
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return {handleChange, values, handleSubmit, errors};
};

export default HomeUseForm;