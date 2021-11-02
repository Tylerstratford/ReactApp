import React from 'react'
import Customer from '../components/Customer'
import { useState, useEffect } from 'react';
const ShowCustomers = () => {

    const [customer, setCustomers] = useState([])
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        setCustomers(await res.json())
      }
  
      fetchData()
    }, [] )


    return (
        
        
        <div className="containerElements">
            <h1 className="title">Show customers</h1>
            {
          customer.map(customers => (
            <div key={customers.id}>
                <Customer  item={customers} />
            </div>
          ))
        }
            {/* <Customer /> */}
        </div>
    )
}

export default ShowCustomers
