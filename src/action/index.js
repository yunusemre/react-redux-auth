import axios from 'axios';
import { message } from 'antd'
import { createBrowserHistory } from 'history';
import { 
    USER_LOGGING_IN, 
    USER_LOGGED_IN, 
    USER_LOGGING_ERROR, 
    USER_REQUEST, 
    USER_SUCCESS, 
    USER_FAILURE, 
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    LOGOUT_REQUEST, 
    LOGOUT_SUCCESS, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAILURE, 
    FORGOT_PASSWORD_REQUEST, 
    FORGOT_PASSWORD_SUCCESS, 
    FORGOT_PASSWORD_FAILURE, 
    CONFIRM_PASSWORD_REQUEST, 
    CONFIRM_PASSWORD_SUCCESS, 
    CONFIRM_PASSWORD_FAILURE,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_FAILURE
} from './actionTypes'
import i18n from '../i18n';

// token settings
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const history = createBrowserHistory()
export function actLogin(data){
    return (dispatch) => { 
        dispatch({ type: USER_LOGGING_IN  })
        axios.post('/api/auth/login/', data)
        .then(res => {
            message.success('Welcome')
            history.push('/')
            window.location.reload(true)
            dispatch({ type: USER_LOGGED_IN, payload: res.data })
        })
        .catch(error=>{
            message.error(Object.values(error.response.data)[0].toString())
            dispatch({ type: USER_LOGGING_ERROR, message: error.response.data})
        })
    }
}

export function actRegister(data){
    return (dispatch) => { 
        dispatch({ type: USER_REGISTER_REQUEST  })
        axios.post('/api/auth/register/', data)
        .then(res => {
            message.success('User register')
            history.push('/login')
            window.location.reload(true)
            dispatch({ type: USER_REGISTER_SUCCESS })
        })
        .catch(error=>{
            dispatch({ type: USER_REGISTER_FAILURE })
        })
    }
}

export function actGetUser(){
    return (dispatch) => { 
        dispatch({ type: USER_REQUEST  })
        axios.get('/api/auth/user/')
        .then(res => {
            dispatch({ type: USER_SUCCESS, payload: res.data })
        })
        .catch(error=>{
            dispatch({ type: USER_FAILURE, message: error.data })
        })
    }
}

export function actUpdateUser(data){
    return (dispatch) => { 
        dispatch({ type: USER_UPDATE_REQUEST  })
        axios.put('/api/auth/user/', data)
        .then(res => {
            dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data })
            message.success(i18n.t('user_updated_successfully'))
        })
        .catch(error=>{
            dispatch({ type: USER_UPDATE_FAILURE, message: error.data })
        })
    }
}

export function actLogOut(){
    return (dispatch) => { 
        dispatch({ type: LOGOUT_REQUEST  })
        axios.post('/api/auth/logout/')
        .then(res => {
            history.push('/auth/login')
            window.location.reload(true)
            dispatch({ type: LOGOUT_SUCCESS })
        })
    }
}

export function actPasswordForgot(data){
    return (dispatch) => { 
        dispatch({ type: FORGOT_PASSWORD_REQUEST  })
        axios.post('/api/auth/password/reset/', data)
        .then(res => {
            history.push('/login')
            window.location.reload(true)
            dispatch({ type: FORGOT_PASSWORD_SUCCESS })
        })
        .catch(error=>{
            dispatch({ type: FORGOT_PASSWORD_FAILURE })
        })
    }
}

export function actConfirmPassword(data) {
    return (dispatch) => { 
        dispatch({ type: CONFIRM_PASSWORD_REQUEST  })
        axios.post('/api/auth/password/reset/confirm/', data)
        .then(res => {
            history.push('/login')
            window.location.reload(true)
            dispatch({ type: CONFIRM_PASSWORD_SUCCESS })
        })
        .catch(error=>{
            dispatch({ type: CONFIRM_PASSWORD_FAILURE })
        })
    }
}

export function actPasswordChange(data) {
    return (dispatch) => { 
        dispatch({ type: PASSWORD_CHANGE_REQUEST  })
        axios.post('/api/auth/password/change/', data)
        .then(res => {
            dispatch({ type: PASSWORD_CHANGE_SUCCESS })
        })
        .catch(error=>{
            dispatch({ type: PASSWORD_CHANGE_FAILURE })
        })
    }
}
