import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Authentication() {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [login, setLogin] = useState('SingIn/');
  const [FromInvalid,setFromInvalid ] = useState('');
  const [displayFromInvalid,setdisplayFromInvalid ] = useState('none');
  const Users = useSelector(state => state.Users);
  const styleFromInvalid = {animationName :FromInvalid};
  let user = [];
  const h = () => {
    if (user.length === 0){
      setFromInvalid('formAutentification')
      setTimeout(()=>{setFromInvalid('')},3000)
      setdisplayFromInvalid('block')
      setTimeout(()=>{setdisplayFromInvalid('none')},3000)
    }
  }
  useEffect(() => {
    user = Users.filter(e => e.username === UserName && e.password === Password);
    const findUser = Users.find(e => e.username === UserName && e.password === Password)
    if (user.length === 1){
      setLogin(`SingIn/${findUser.id}`) // L'envoit d'id de l'utilisateur que fair l'autentification
    }else{
      setLogin('')
    }
  },[Password, UserName, user]);

  return (
    <main id="Autentification" className="d-flex align-items-center justify-content-center">
      <div style={styleFromInvalid} className="form-container formAutentification">
        <section id="Formulaire" className="p-3">
          <div className="my-2 w-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light LOGIN">LOGIN</h1>
          </div>
          <div className="my-2">
            <label className="text-light LOGIN" htmlFor="User_name">User name</label>
            <br />
            <input onChange={(e) => setUserName(e.target.value)} id="User_name" type="text" />
          </div>
          <div className="my-2">
            <label className="text-light LOGIN" htmlFor="Password">Password</label>
            <br />
            <input onChange={(e) => setPassword(e.target.value)} id="Password" type="password" />
          </div>
          <div className="mt-4 w-100 flex-column d-flex align-items-center justify-content-center">
            <Link onClick={h} to={'/' + login} className="Login"><button className="btn btn-primary">Login</button></Link>
            <Link to='/Inscription' className="Lien">Registration</Link>
          </div>
          <div style={{display:displayFromInvalid}} className="alert alert-danger text text-center mt-2" role="alert">
              The user name or password is invalid !!!
          </div>
        </section>
      </div>
    </main>
  );
}

export default Authentication;
