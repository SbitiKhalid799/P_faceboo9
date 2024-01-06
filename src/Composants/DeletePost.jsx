import { useDispatch } from "react-redux"
import {DeletrPost} from '../ReduxComopsant/action'

export default function DeletePost(props){
    const{DD,id,t,setT}= props
    const Dispatch = useDispatch()
    const HandlerDeletePost = () => {
        Dispatch(DeletrPost(parseInt(id)))
        setT('Bakgroundre')
    }
    return(
        <>
            <div style={{display:DD,animationName:t}} className="Bakground">
                <div className="d-flex flex-column align-items-center justify-content-center">
                      <h3 className="text text-light mb-3">Do you want to remove it ?</h3> 
                      <span className="mt-3 ChoisBtn">
                       <button onClick={HandlerDeletePost} className="mx-1 btn">Yes</button>
                        <button onClick={() => setT('Bakgroundre')} className="mx-1 btn">No</button>
                      </span>
                </div>
            </div>
        </>
    )
}