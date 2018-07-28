import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser } from './action'
import { login, users, register, passwordForgot, confirmPassword, logout } from './reducer'
import Login from  './views/Login'
import Register from './views/Register'
import ForgotPassword from './views/ForgotPassword'
import ConfirmPassword from './views/ConfirmPassword'

export {
    actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser,
    login, users, register, passwordForgot, confirmPassword, logout,
    Login, Register, ForgotPassword, ConfirmPassword
}