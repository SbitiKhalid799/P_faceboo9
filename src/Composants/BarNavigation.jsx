import { useState } from "react"
import TableuChoise from "./TableuChois"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navigat(){
    const{id} = useParams()
    const Users = useSelector(state => state.Users)
    const user = Users.find((e)=> e.id === parseInt(id))
    const[placeNav,setplaceNav]= useState(0)
    const[symbol,setSymbol]= useState('×')
    const[Dis,setDis]= useState('none')
    const [DDD,SetDDD] = useState('')
    const handlerplaceNav = () => {
        if ( placeNav === 0){
            setplaceNav("-250px")
            setSymbol("≡")
        }else{
            setplaceNav(0)
            setSymbol('×')
        }
    }
    const Disconnect = () =>{
        SetDDD('Bakground')
        setDis('flex')
    }
    return(
        <>
        <nav className="NavBar p-2" style={{left:placeNav}}>
        <h4 className="text text-light">{user.username}</h4>
        <hr/>
            <ul>
                <li><Link to={'../SingIn/'+id}>Home</Link></li>
                <li><Link to={"/Profile/"+id}>Profile</Link></li>
                <li><Link to={"/Contact/"+id} >Contact</Link></li>  
            </ul>
            <div className="Disconnect p-3 w-100 d-flex align-items-center justify-content-center">
                <button onClick={Disconnect} className="btn">Disconnect</button>
            </div>
            <button onClick={handlerplaceNav} className="ClosOpenBarNav">{symbol}</button>
        </nav>
        <TableuChoise DDD={DDD} SetDDD={SetDDD} Dis={Dis}/>
        </>
    )
}