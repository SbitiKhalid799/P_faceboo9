import Navigat from "./BarNavigation";
import { useSelector } from "react-redux";
import Post from "./Post";

export default function UserIntairface() {
    const Publications = useSelector(state => state.Publications);
    return (
        <div className="UserintairfaceBack">
            <h1 className="mt-3 mx-5 TITRE">Home</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {Publications.map((ev, i) => (<Post key={i} ev={ev}/>))}
                </div>
            </div>
            <Navigat />
        </div>
    );
}
