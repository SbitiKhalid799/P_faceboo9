import './App.css';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { store } from './ReduxComopsant/store'
import Autentification from './Composants/Autentification';
import Inscription from './Composants/Inscription';
import UserIntairface from './Composants/UserIntairface';
import Profile from './Composants/Profile';
import Contact from './Composants/Contact';
import Chate from './Composants/Conversation';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
  return (
    <div className='Allezae'>
    <HashRouter>
      <Routes>
        <Route path='/SingIn/:id' element={<Provider store={store}><UserIntairface/></Provider>}/>
        <Route path='/Profile/:id' element={<Provider store={store}><Profile/></Provider>}/>
        <Route path='/Contact/:id' element={<Provider store={store}><Contact/></Provider>}/>
        <Route path='/' element={<Provider store={store}><Autentification/></Provider>}/>
        <Route path='/Inscription' element={<Provider store={store}><Inscription/></Provider>} />
        <Route path='/Chate/:idUser/:id' element={<Provider store={store}><Chate/></Provider>} />
      </Routes>
    </HashRouter>
    </div>
  )
}
