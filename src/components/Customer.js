import React from 'react'

const Customer = ({item}) => {
    return (
        <div className="containerElements">
            <div className="card">
                <div className="leftCard"> 
                    <i className="fas fa-user customerIcon"></i>
                </div>
                <div className="rightCard"> 
                    <p>First name: {item.firstName} </p>
                    <p>Last name: {item.lastName} </p>
                    <p>Email: {item.email} </p>
                </div>

            </div>
        </div>
    )
}

export default Customer
