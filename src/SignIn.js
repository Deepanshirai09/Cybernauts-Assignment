import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedin, FaRegUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { AiOutlineLock } from "react-icons/ai"
const SignIn = (props) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])

    const LoginIn = async (email, password) => {
        let data = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
    
        })
        let datas = await data.json();
        setEmail('');
        setPassword('');
        if (datas.length > 0) {
          setData(datas);
        } else {
          alert("user not found signup");
        }
      }
    
    return(
        <div className='mainHolder' style={{ display: `${props.show === "login" ? "flex" : "none"}` }}>
        <div className='mainHolderItemOne' >
          <div className='mainDesign2'></div>
          <div className='mainDesign3'></div>
          <div className='mainDesign4'></div>
          <div className='mainHolderItemOneDetails'>
            {data.length > 0 ? (<><h1>Welcome {data[0].name}</h1>
            <p>{data[0].email}</p></>):(<><h1>Welcome </h1>
            <p>To connected with us please create account with your personal info</p></>) }
            <button onClick={() => { props.ShowHandler("signup") }}>SIGN UP</button>
          </div>
        </div>
        <div className='mainHolderItemTwo'>
          <div className='mainHolderItemTwoHolder'>
            <div className='mainHolderItemTwoHolderHeading'>
              <h2>Login Account</h2>
            </div>
            <div className='mainHolderItemTwoHolderSocialMedia'>
              <p><FaFacebookF size={20} /></p>
              <p><FaGooglePlusG size={20} /></p>
              <p><FaLinkedin size={20} /></p>
            </div>
            <div className='mainHolderItemTwoHolderText'>
              <p>or use your email for registration</p>
            </div>

            <div className='mainHolderItemTwoHolderInput'>
              <label ><MdOutlineEmail size={20} /></label>

              <input type='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
            </div>
            <div className='mainHolderItemTwoHolderInput'>
              <label ><AiOutlineLock size={20} /></label>
              <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
            </div>
            <div className='mainHolderItemTwoHolderButton'>
              <button onClick={() => { LoginIn(email, password) }}>SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignIn;