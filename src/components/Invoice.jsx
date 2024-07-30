import React from 'react';
import './Invoice.css' 

function Invoice({ data }) {
  return (
    <>
    
    <td>{data.id}</td>
    <td>{data.invoice_number}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.amount}</td>
    
    </>
    
  );
}

export default Invoice;
