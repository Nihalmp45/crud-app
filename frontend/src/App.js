import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Details from './Components/Details'
import EmployeeForm from './Components/EmployeeForm'

const App= ()=>{
  const [employees, setEmployees] = useState([]);

  const handleEmployeeDetails = (details) => {
    setEmployees([...employees, details]);
  };

  return (
    <>
    <div className='App'>
    <Router>
    <Routes >
       <Route path='/' element ={<Details handleEmployeeDetails={handleEmployeeDetails}/>}></Route>
       <Route path='/Sign-up' element ={<EmployeeForm />}></Route>
    </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
