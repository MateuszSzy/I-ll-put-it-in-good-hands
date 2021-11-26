import {useState} from "react";
import {db} from "../firebase";


const HomeUseForm = validate => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader,setLoader] = useState(false);

    console.log(name,email,message,loader);

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


        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(values => {
                console.log(values);
            })
            .catch((error) => {
                console.log(error)
            });


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