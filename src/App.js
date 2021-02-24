import React from 'react'

import { Route, Redirect } from "react-router-dom"

import { Menu, GuardRouter, Modal } from './components'

import { Home, Favorite, Login } from './pages'

import { useSelector, useDispatch } from 'react-redux'

import { setToken } from './redux/actions/user'

import { reactLocalStorage } from 'reactjs-localstorage';

const App = () => {
  const dispatch = useDispatch()
  const [token, modal] = useSelector(({ user, modal }) => [user.token, modal.activeModal]);
  
  const guard = (component) => token ? component : <Redirect to='/login' />

  React.useEffect(() => {
    const user = reactLocalStorage.getObject(reactLocalStorage.get('login'))
    if(Object.keys(user).length){
      dispatch(setToken(user.token))
    }
}, []);

  const changeInputHandler = (e, func) => {
    func(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {modal && <Modal dispatch={dispatch} reactLocalStorage={reactLocalStorage} changeInputHandler={changeInputHandler} />}
      {token && <Menu dispatch={dispatch} useSelector={useSelector} />}
      <Route
        path="/login"
        render={() => token
          ? <Redirect to='/' />
          : <Login dispatch={dispatch} reactLocalStorage={reactLocalStorage} changeInputHandler={changeInputHandler}/>} />

      {/* Fixed: не передаются пропсы */}
      {/* <GuardRouter path="/favorite" component={Favorite} auth={token} test="321"/> */}
      {/* <GuardRouter path="/" component={Home} auth={token} exact/> */}
      <Route path="/favorite" render={() => guard(<Favorite dispatch={dispatch} useSelector={useSelector} />)} />
      <Route path="/" render={() => guard(<Home dispatch={dispatch} useSelector={useSelector} />)} exact />
    </>
  );
}

export default App;
