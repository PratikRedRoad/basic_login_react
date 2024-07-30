import React, { useState, useEffect } from 'react';
import Title from './ui/Title'
import Invoice from './Invoice'; 


export default function InvoiceList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch('http://localhost:8001/invoices',{
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json',
      //   // 'Authorization': localStorage.getItem('token')
      // }
    }).then(response => response.json())
      .then(data => setData(data.invoices))
      .catch(error => setError(error));
  }, []);

  console.log(data);
  if (error) {
    return <div>Error   :: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
    <div className="invoice-list">
      <Title/>
        <div className="invoice">
        <h3>Invoice List</h3>
          <table >
              <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>ID</th>
                    <th>Invoice Number</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                </tr>
              </thead>
              <tbody>
              
                {data.map((invoice, index) => (
              
                <tr key={index}>
                    <td>{index + 1}</td> {/* Serial Number */}
                    <Invoice data={invoice} />
                </tr>
              ))}
              </tbody>
          </table>  
        </div>
    </div>
    );
  }
}
