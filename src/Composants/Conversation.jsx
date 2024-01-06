import { useDispatch, useSelector } from "react-redux";
import Navigat from "./BarNavigation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {SendMesg} from '../ReduxComopsant/action'

export default function Chate() {
  const { id, idUser } = useParams();
  const Users = useSelector((state) => state.Users);
  const Emeteur = Users.find((e) => e.id === parseInt(id));
  const Resepteur = Users.find((e) => e.id === parseInt(idUser));
  const Convercation = useSelector((state) => state.Convercation);
  const ms = Convercation.find((e) => e.id === `${Emeteur.id}_with_${Resepteur.id}` || e.id === `${Resepteur.id}_with_${Emeteur.id}`);
  const messages = ms ? ms.msgs : [];
  const [M,SetM] = useState('')
  const Dispatch = useDispatch()
  const HandlerSendMessage = () => {
    if (M !== "" ){
        Dispatch(SendMesg(parseInt(id), M, (`${Emeteur.id}_with_${Resepteur.id}`).toString(),(`${Resepteur.id}_with_${Emeteur.id}`).toString()))
    }
  }
  return (
    <div className="bgbgbg">
      <Navigat />
      <h1 className="my-3 mx-5 TITRE">
        Chate : {Emeteur.username} with {Resepteur.username}
      </h1>
      <div className="Message1 d-flex align-items-center justify-content-center p-3">
        <input onChange={(event)=>SetM(event.target.value)} placeholder="Message" className="mx-3 px-4 py-1 text text-center text-light" type="text"/>
        <button onClick={HandlerSendMessage}>Send</button>
      </div>
      <div className="container scroll-container chate">
        <table className="w-100 mt-4">
          {messages.map((message, index) => (
            <tr key={index}>
              <td className={message.idU === Emeteur.id ? "hisMessage" : "yourMessage"}>
                {message.idU === Emeteur.id && (<div className="py-2 px-4 mx-2">{message.Message}</div>)}
              </td>
              <td className={message.idU === Resepteur.id ? "yourMessage" : "hisMessage"}>
                {message.idU === Resepteur.id && (<div className="py-2 px-4 m-2">{message.Message}</div>)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
