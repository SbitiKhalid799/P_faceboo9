import { Link } from "react-router-dom"

export default function TableuChoise(props){
    const{Dis,DDD,SetDDD} = props
    const No = () =>{
        SetDDD("Bakgroundre")
    }
    return(
        <>
            <div className="Bakground" style={{display:Dis,animationName:DDD}}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                      <h3 className="text text-light mb-3">Do you want to log out ?</h3> 
                      <span className="mt-3 ChoisBtn">
                        <Link to='/'><button className="mx-1 btn">Yes</button></Link>
                        <button onClick={No} className="mx-1 btn">No</button>
                      </span>
                </div>
            </div>
        </>
    )
}