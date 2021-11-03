import React from 'react'
import CustomerList from '../components/Customer'
import Search from '../components/Search';
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
            <div className="top">
                <h1 className="title">Customer Register</h1>
                <Search />
            </div>
            <div className ="customerGrid">
                {
            customer.map(customers => (
                <div key={customers.id}>
                    <CustomerList  item={customers} />
                </div>
                ))
            }
            </div>
            <footer className="footer"></footer>
        </div>
    )
}

export default ShowCustomers
