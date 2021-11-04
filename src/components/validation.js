import React from 'react'

const validation = (values) => {

    let errors = {};
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let minLength = 2
    if(!values.firstname) {
        errors.firstname="Name is required."
    }

    if(!values.lastname) {
        errors.lastname="Lastname is required"
    } 

    if(!regExEmail.test(values.email)) {
        errors.email="Email is invalid"
    } 

    return errors;
}

export default validation
