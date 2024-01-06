import { useState } from "react"
import Navigat from "./BarNavigation"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {NewConvercarion} from '../ReduxComopsant/action'

export default function Contact(){
    const User = useSelector(state => state.Users)
    const[SearchIn,setSearchIn] = useState('')
    const{id} = useParams()
    const Dispatch = useDispatch()
    const HandlerAddNewConvercation = (id,idU) => {
        Dispatch(NewConvercarion(id,idU))
    }
    return(
        <div className="UserintairfaceBack">
        <h1 className="my-3 mx-5 TITRE">Contact</h1>
            <div className="Search d-flex align-items-center justify-content-center p-3">
            <input placeholder="Search" onChange={(e)=>setSearchIn(e.target.value)} className="mx-3 px-4 py-1 text text-center text-light" type="text" />
            </div>
            <Navigat/>
            <div className="container Con">
                <div className="row d-flex justify-content-center">
                {
                    SearchIn === ''
                ?
                    User.filter(e => e.id !== parseInt(id)).map((e,i)=>(
                        <div className="col-lg-5 col-lg-7 col-md-9 col-12" key={i}>
                            <div className="Contact my-3">
                                <h3 className="text text-light p-3">
                                    {e.username}
                                </h3>
                                <div className="Message w-100 d-flex align-items-center justify-content-center">
                                <Link to={'/Chate/'+e.id+'/'+id}><button onClick={()=>HandlerAddNewConvercation(id,e.id)}>Send</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                :
                User.filter(e => e.username === SearchIn && e.id !== parseInt(id)).map((e,i)=>(
                    <div className="col-lg-5 col-lg-7 col-md-9 col-12" key={i}>
                    <div className="Contact my-3">
                        <h3 className="text text-light p-3">
                            {e.username}
                        </h3>
                        <div className="Message w-100 d-flex align-items-center justify-content-center">
                        <Link to={'/Chate/'+e.id+'/'+id}><button onClick={()=>HandlerAddNewConvercation(id,e.id)}>Send</button></Link>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}