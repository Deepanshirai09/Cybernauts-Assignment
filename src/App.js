import './App.css';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  const [show, setShow] = useState("signup")
  const ShowHandler = (data) =>{
    setShow(data);
  }
  return (
    <div className='main'>
      <div className='mainDesign1'></div>
      <div className='mainDesign5'></div>
      <SignIn show={show} ShowHandler={ShowHandler}/>
      <SignUp show={show} ShowHandler={ShowHandler}/>
      
    </div>
  );
}

export default App;