import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage';

export const Types = {
    SET_TOKEN: 'USER@TOKEN:SET_TOKEN',
};

const generate_token = () => {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_'];
    const alph = [...arr_en, ...arr_EN, ...arr_num]

    let token = ''
    
    const token_length = 20;
    for(let i = 0; i < token_length; i++){
        let rand = Math.floor(Math.random() * alph.length);
        let rand_char = alph[rand];
        token += rand_char
    }
    return token;
}

export const login = (user) => (dispatch) => {
    // if(user.login === 'admin' && user.password === 'admin'){
    //     const token = '123'
    //     dispatch(setToken(token))
    // }
    const url = 'http://localhost:3000/accounts.json'
    axios.get(url).then((data) => {
        const accounts = data.data
        if(accounts[user.login] === user.password){
            const token = generate_token()
            const prevObj = reactLocalStorage.getObject(user.login)
            reactLocalStorage.setObject(user.login, {...prevObj, token: token})
            reactLocalStorage.set('login', user.login)
            dispatch(setToken(token))
        } else {
            console.log('ошибка')
        } 
    })
}

export const logout = () => (dispatch) => {
    dispatch(setToken(null))
}

export const setToken = (token) => {
    return {
        type: Types.SET_TOKEN,
        payload: token
    }
}