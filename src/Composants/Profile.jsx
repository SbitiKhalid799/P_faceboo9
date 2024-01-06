import { useParams } from "react-router-dom";
import Navigat from "./BarNavigation";
import { useSelector } from "react-redux";
import Addpost from "./Addpost";
import { useState } from "react";
import DeletePost from "./DeletePost";
import Post from "./Post";

export default function Profile() {
    const[IDID,setIDID] = useState("")
    const[t,setT] = useState("")
    const {id} = useParams();
    const Publications = useSelector((state) => state.Publications);
    const[DD2,setDD2] = useState('none')
    const [DDDd,SetDDDd] = useState('')
    const [DDDdd,SetDDDdd] = useState('none')
    const HandlerId = (id) => {
        setDD2('flex')
        setIDID(id)
        setT('Bakground')
    }
    const Addapublication = () =>{
        SetDDDdd('flex')
        SetDDDd('Bakground')
    }
    return (
        <div className="UserintairfaceBack">
            <div className="AddPub">
                <button onClick={Addapublication}>Add a publication</button>
            </div>
            <h1 className="my-3 mx-5 TITRE">Profile</h1>
            <div className="Profile">
                <div className="container">
                    {Publications.filter((e) => e.userId === parseInt(id)).map((e, i) => (
                            <div key={i}>
                                <h3 className="removePostP">
                                    <button onClick={()=>HandlerId(e.id)} className="removePost">×</button>
                                </h3>
                                <Post Dis={'none'} key={i} ev={e}/>
                            </div>))
                        }
                </div>
            </div>
            <Navigat />
            <Addpost DDDd={DDDd} SetDDDd={SetDDDd} SetDDDdd={SetDDDdd} DDDdd={DDDdd} id={id}/>
            <DeletePost DD={DD2} setDD={setDD2} id={IDID} t={t} setT={setT}/>
        </div>
    );
}
