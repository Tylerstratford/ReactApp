
const validation = (values) => {

    let errors = {};
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    let regExName = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/i;
    let firstNameValid = false;
    let lastNameValid = false;
    let emailValid = false;
    let isValid = false;
    let validCounter = 0


    //First name
    if(!regExName.test(values.firstname)) {
        errors.firstname="At least 2 characters [a-z] needed"
        console.log(`first name: ${firstNameValid}`)
    } else {
        firstNameValid = true
        console.log(`first name: ${firstNameValid}`)
        validCounter++
    }

    //Last name
    if(!regExName.test(values.lastname)) {
        errors.lastname="At least 2 characters [a-z] needed"
        console.log(`last name: ${lastNameValid}`)
    } else {
        lastNameValid = true;
        console.log(`last name: ${lastNameValid}`)
        validCounter++
    }
    
    //Email
    if(!regExEmail.test(values.email)) {
        errors.email="Email is invalid"
        console.log(`Email: ${emailValid}`)
    } else {
        emailValid = true;
        console.log(`Email: ${emailValid}`)
        validCounter++
    }

    if (validCounter === 3) {
        isValid = true
    }

    //Checkers
    console.log(`valid counter = ${validCounter}, needs 3 to be valid`)
    console.log(`Valid = ${isValid}`)


    //IF all is valid -  send data
    if(isValid) {
        alert('Customer Added!')       

        let data = JSON.stringify({ 
            firstName: values.firstname, 
            lastName: values.lastname, 
            email: values.email})
    
        async function fetchData() {
            await fetch('https://ecexam-webapi.azurewebsites.net/api/Customers', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: data
            })
        }

        fetchData();

    } else {
        console.log('still not valid')
    }

    //If all is valid, data sent and data rinsed
    if(isValid) {
        values.firstname = ""
        values.lastname = ""
        values.email = ""
    }

    return errors;

}

export default validation
