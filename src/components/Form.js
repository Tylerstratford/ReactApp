import React, {useEffect, useState} from 'react'
import validation from './validation';
import submit from './submit';
const Form = () => {

    const [values, setValues] = useState ({
        firstname: "",
        lastname: "",
        email: "",
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const [errors, setErrors] = useState({});

    const handelFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }

    const error = {
        color: 'red',
        marginBottom: '5px',
        marginTop: '-25px',
        fontSize: '14px'
    }
    return (
        <div className="containerCard">
            <div className="cardCustomer">
                <div className="leftCardCustomer"> 
                    <i className="fas fa-user customerIconCustomer"></i>
                    <h2>Create a new customer</h2>
                </div>
                <div className="rightCardCustomer"> 
                    <form className="form">
                        <h2>Contact info </h2>
                        <input 
                            className = "search" 
                            name="firstname"
                            value={values.firstname}
                            type="text" 
                            placeholder = "First name: " 
                            onChange={handleChange}
                        />
                        {errors.firstname && <p style={error}> {errors.firstname} </p>}

                        <input 
                            className = "search"
                            name="lastname" 
                            value={values.lastname}
                            type="text"
                            placeholder = "Last name: "
                            onChange={handleChange}
                        />
                        {errors.lastname && <p style={error}> {errors.lastname}</p>}
                        <input 
                            className = "search" 
                            name="email"
                            value={values.email}
                            type="email"
                            placeholder = "Email adress:" 
                            onChange={handleChange}
                        />
                        {errors.email && <p style={error}> {errors.email}</p>}
                        <button className = "button" id="button" type='submit' onClick={handelFormSubmit}>Submit </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
