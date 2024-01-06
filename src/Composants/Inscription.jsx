import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {inscription} from '../ReduxComopsant/action'

export default function Inscription() {
  const Timer = 4000
  const[Username,SetUsername] = useState('')
  const[Password,SetPassword] = useState('')
  const[CPassword,SetCPassword] = useState('')
  const[Gender,SetGender] = useState('')
  const[MessageSuccess,SetMessageSuccess] = useState('none')
  const[MessageDanger,SetMessageDanger] = useState('none')
  const[MessageCPassowrd,SetMessageCPassowrd] = useState('none')
  const Dispatch = useDispatch()
  const Handler_add_User = () =>{
    if(Username === "" || Password === "" || CPassword === "" || Gender === "" ){
      SetMessageDanger('block')
      setTimeout(()=>{SetMessageDanger('none')},Timer)
    }
    else{
      if (Password === CPassword){
        Dispatch(inscription(Username,Password,Gender))
        SetMessageSuccess('block')
        setTimeout(()=>{SetMessageSuccess('none')},Timer)
      }else{
        SetMessageCPassowrd('block')
        setTimeout(()=>{SetMessageCPassowrd('none')},Timer)
      }
    }
  }
  return (
    <main id="Autentification" className="d-flex align-items-center justify-content-center">
      <section id='Formulaire' className="p-3">
        <div className="my-2 w-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light LOGIN">REGISTRATION</h1>
        </div>
        <div className="my-2">
          <label className="text-light" htmlFor="User_name">Username</label>
          <br />
          <input onChange={(e)=>SetUsername(e.target.value)} id="User_name" type="text"/>
        </div>
        <div className="my-2">
          <label className="text-light" htmlFor="Password">Password</label>
          <br />
          <input onChange={(e)=>SetPassword(e.target.value)} id="Password" type="password" />
        </div>
        <div className="my-2">
          <label className="text-light" htmlFor="Confirm_Password">Confirm Password</label>
          <br />
          <input onChange={(e)=>SetCPassword(e.target.value)} id="Confirm_Password" type="password" />
        </div>
        <div className="my-2">
          <label className="text-light" htmlFor="Gender">Gender</label>
          <br/>
          <select onChange={(e)=>SetGender(e.target.value)} id="Gender">
            <option value="male"></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mt-4 w-100 flex-column d-flex align-items-center justify-content-center">
          <button onClick={Handler_add_User} className="btn btn-primary">Register</button>
          <Link className="Lien" to='/'>Login</Link>
        </div>
        <div style={{display:MessageSuccess}} className="alert alert-success text text-center mt-2" role="alert">
            Successfully registered
        </div>
        <div style={{display:MessageDanger}} className="alert alert-danger text text-center mt-2" role="alert">
            All fields must be filled out
        </div>
        <div style={{display:MessageCPassowrd}} className="alert alert-danger text text-center mt-2" role="alert">
            Password verification is incorrect
        </div>
    
      </section>
    </main>
  );
}
