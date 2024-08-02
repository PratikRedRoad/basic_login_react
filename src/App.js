import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import InvoiceList from "./components/InvoiceList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './components/ui/NotFound';
import Home from './components/ui/Home'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/invoices" element={<InvoiceList />} /> */}
        <Route path= "*" element = {<NotFound/>} component={NotFound} />
      </Routes>
    </BrowserRouter>
)}

export default App;

const rootElement = document.getElementById("root");
