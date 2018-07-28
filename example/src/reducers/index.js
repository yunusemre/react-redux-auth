import {combineReducers} from 'redux'
import {login, users, register, passwordForgot, confirmPassword} from 'rr-auth'

export default combineReducers({
    login,
    users,
    register,
    passwordForgot,
    confirmPassword
});