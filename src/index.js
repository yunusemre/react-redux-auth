export { 
    getLogin, 
    register, 
    passwordForgot, 
    confirmPassword , 
    logOut, 
    getUser 
} from './action'
import {
    login, 
    users, 
    register, 
    passwordForgot, 
    confirmPassword
} from './reducer/auth_reducer'
export const authStateReducer = combineReducers({
    login,
    users,
    register,
    passwordForgot,
    confirmPassword
});