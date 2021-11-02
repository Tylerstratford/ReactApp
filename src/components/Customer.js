import React from 'react'

const CustomerList = ({item}) => {
    return (
        <div className="containerElements">
            <div className="card">
                <div className="leftCard"> 
                    <i className="fas fa-user customerIcon"></i>
                    <i className="fad fa-stars customerStar"></i>
                </div>
                <div className="rightCard"> 
                    <h2>Contact info: </h2>
                    <p>{item.firstName} {item.lastName} </p>
                    <p>{item.email} </p>
                </div>

            </div>
        </div>
    )
}

export default CustomerList
