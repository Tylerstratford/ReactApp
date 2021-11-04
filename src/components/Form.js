import React from 'react'

const Form = () => {

    return (
        <div className="containerCard">
            <div className="cardCustomer">
                <div className="leftCardCustomer"> 
                    <i className="fas fa-user customerIconCustomer"></i>
                    <h2>Create a new customer</h2>
                    {/* <i className="fad fa-stars customerStar"></i> */}
                </div>
                <div className="rightCardCustomer"> 
                    <form className="form">
                        <h2>Contact info </h2>
                        <input 
                            className = "search" 
                            id="firstName"
                            type="text" 
                            placeholder = "First name: " 
                        />
                        <input 
                            className = "search" 
                            type="text"
                            placeholder = "Last name: "
                        />
                        <input 
                            className = "search" 
                            type="email"
                            placeholder = "Email adress:" 
                        />
                        <button className = "button" id="button" type='submit'>Submit </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
