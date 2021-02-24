import React from 'react'

import cn from 'classnames'

import logo from '../static/imgs/sibdev-logo.png';

import { Button } from '../components'
import { login } from '../redux/actions/user'


const Login = ({ dispatch, changeInputHandler }) => {
    const [activeHeart, setActiveHeart] = React.useState(false)

    const [authFormValues, setAuthFormValues] = React.useState({
        login: '',
        password: ''
    })

    const heartClick = () => {
        setActiveHeart(!activeHeart)
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(login(authFormValues))
    }
    return (
        <div className="container content">

            <div className="test">
                <form onSubmit={submit}>
                    <img src={logo} alt="" />
                    <h3>Вход</h3>
                    <label>
                        Логин
                        <div>
                            <input
                                type="text"
                                placeholder="Логин"
                                name='login'
                                value={authFormValues.login}
                                onChange={(e) => changeInputHandler(e, setAuthFormValues)}
                            />
                        </div>
                    </label>

                    <label>
                        Пароль
                        <div className="password__input">
                            <input
                                type={!activeHeart ? "password" : "text"}
                                placeholder="Пароль"
                                name='password'
                                value={authFormValues.password}
                                onChange={(e) => changeInputHandler(e, setAuthFormValues)}
                            />
                            <span className={cn('heart', { 'active': activeHeart })} onClick={heartClick}></span>
                        </div>
                    </label>
                    <Button type="submit">Войти</Button>
                </form>
            </div>


        </div>
    )
}

export default Login
