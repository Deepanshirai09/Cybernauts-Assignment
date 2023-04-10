import { useState } from "react"
import { FaFacebookF, FaGooglePlusG, FaLinkedin, FaRegUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { AiOutlineLock } from "react-icons/ai"
const SignUp = (props) =>{
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const SignUp = async (name, email, password) => {
        if(password.length < 6){
            alert("Password must contain min 6 letters.")
        }
        else{
        let data = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password
          }),
    
        })
        let datas = await data.json();
        setEmail('');
        setName('');
        setPassword('');
        if (datas) {
          props.ShowHandler("login")
        } else {
          alert(datas.msg); 
        }
     }
      }
    return (
        <div className='mainHolder' style={{ display: `${props.show === "signup" ? "flex" : "none"}` }}>
        <div className='mainHolderItemOne'>
          <div className='mainDesign2'></div>
          <div className='mainDesign3'></div>
          <div className='mainDesign4'></div>
          <div className='mainHolderItemOneDetails'>
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={() => { props.ShowHandler("login") }}>SIGN IN</button>
          </div>
        </div>
        <div className='mainHolderItemTwo'>
          <div className='mainHolderItemTwoHolder'>
            <div className='mainHolderItemTwoHolderHeading'>
              <h2>Create Account</h2>
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
              <label ><FaRegUser size={20} /></label>
              <input type='text' placeholder='Name' onChange={(e) => { setName(e.target.value) }} value={name}></input>
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
              <button onClick={() => { SignUp(name, email, password) }}>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SignUp;