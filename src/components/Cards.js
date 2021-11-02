import React from 'react'

const Cards = ({item}) => {
    return (
        <div className="containerElements">
            <div className="card">
                <div className="leftCard"> 
                    <i class="fas fa-user customerIcon"></i>
                </div>
                <div className="rightCard"> 
                    <p>First name: </p>
                    <p>Last name: </p>
                    <p>Email: </p>
                </div>

            </div>
        </div>
    )
}

export default Cards
