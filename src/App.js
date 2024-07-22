import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./Auth"
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
//   <form onSubmit={handleSubmit(onSubmit)}>
//   {/* register your input into the hook by invoking the "register" function */}
//   <input defaultValue="test" {...register("example")} />

//   {/* include validation with required or other standard HTML validation rules */}
//   <input {...register("exampleRequired", { required: true })} />
//   {/* errors will return when field validation fails  */}
//   {errors.exampleRequired && <span>This field is required</span>}

//   <input type="submit" />
// </form>
)}

export default App;

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);