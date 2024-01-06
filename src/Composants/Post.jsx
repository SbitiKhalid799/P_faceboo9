import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikingPost } from '../ReduxComopsant/action';
import { useParams } from "react-router-dom";

export default function Post(props){
    const [display, setDisplay] = useState('none');
    const Users = useSelector(state => state.Users)
    const Publications = useSelector(state => state.Publications)
    const {id} = useParams()
    const {ev,Dis} = props
    const dispatch = useDispatch()
    const [nameAnim,setNameAnim] = useState('')
    const Handler = () => {
        dispatch(LikingPost(parseInt(id), parseInt(ev.id)))
        setNameAnim('Like')
        setTimeout(()=>setNameAnim(''),1000)
    }
    return(
        <div className="col-lg-5 col-lg-7 col-md-9 col-12">
        <div className="Post my-3">
            <h4 className="text text-light p-3">
                {Users.find(e => e.id === parseInt(ev.userId)).username}
            </h4>
            <p className="text text-center text-light">{ev.Description}</p>
            <div className="LikePost text text-light flex-column d-flex align-items-center justify-content-center">
                <h5 onClick={() => setDisplay(display === 'none' ? 'block' : 'none')} className="likes">likes : {ev.like}</h5>
                <button onClick={Handler} style={{display:Dis,animationName:nameAnim}} className="Like text text-light mb-2">Like</button>
            </div>
            <div className="N_likes" style={{ display: display }}>
                <ul>
                    {Publications.find((U) => U.id === ev.id).usersLike.map((u, i) => (
                        <li key={i}>{Users.find((r) => r.id === u).username}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}