import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import InvoiceList from "./components/InvoiceList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
        <Route path="/invoices" element={<InvoiceList />} />
      </Routes>
    </BrowserRouter>
)}

export default App;

const rootElement = document.getElementById("root");
