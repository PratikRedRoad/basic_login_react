import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import ListView from './components/ListVIew';
import LoginReject from "./LoginReject"
import InvoiceList from "./components/InvoiceList"
// import Invoice from "./components/Invoice"
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import InvoiceMaster from './components/InvoiceMaster';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
        <Route path="/invalid" element={<LoginReject />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/list_view" element={<ListView />} />
      </Routes>
    </BrowserRouter>
)}

export default App;

const rootElement = document.getElementById("root");
