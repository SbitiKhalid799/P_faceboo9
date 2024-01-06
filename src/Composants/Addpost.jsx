import { useState } from "react"
import { useDispatch } from "react-redux"
import {newPost} from '../ReduxComopsant/action'

export default function Addpost(props){
    const{DDDd,SetDDDd,DDDdd,id}= props
    const[namePost,setNamePost] = useState('')
    const[Description,SetDescription] = useState('')
    const Dispatch = useDispatch()
    const [DDD,SetDDD] = useState('none')
    const HandlerAddPost = () => {
        if((namePost !== '' && Description !== '')){
            Dispatch(newPost(id,namePost,Description))
            SetDDDd('Bakgroundre')
        }else{
            SetDDD('block')
            setTimeout(()=>{SetDDD('none')},4000)
        }
    }
    const HandlerAnuuler = () => {
        SetDDDd('Bakgroundre')
    }

    return(
        <div style={{display:DDDdd,animationName:DDDd}} className="Bakground align-items-center justify-content">
            <div  className="FormAddPost d-flex flex-column align-items-center justify-content-center container p-3">
            <label className="text-light w-100" htmlFor="User_name">Name the post</label>
            <br />
            <input onChange={(e)=> setNamePost(e.target.value) } id="User_name" type="text" />
            <br />
            <label className="text-light w-100" htmlFor="User_name">Description</label>
            <br />
            <textarea onChange={(e)=>SetDescription(e.target.value)} cols="30" rows="5"></textarea>
                <span className="mt-3 ChoisBtn">
                    <button className="mx-1 btn" onClick={HandlerAddPost}>OK</button>
                    <button className="mx-1 btn" onClick={HandlerAnuuler}>Cancel</button>
                </span>    
                <span style={{display:DDD}} className="alert alertdanger alert-danger text text-center mt-2 " role="alert">
                    All fields must be filled out !!!
                </span>   
            </div>     
        </div>
    )
}