import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser, actUpdateUser } from './action'
import { login, users, register, passwordForgot, confirmPassword, logout, passwordChange } from './reducer'
import Login from  './views/Login'
import Register from './views/Register'
import ForgotPassword from './views/ForgotPassword'
import ConfirmPassword from './views/ConfirmPassword'
import PasswordChangeForm from './views/PasswordChange'


export {
    actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser, actUpdateUser,
    login, users, register, passwordForgot, confirmPassword, logout, passwordChange,
    Login, Register, ForgotPassword, ConfirmPassword, PasswordChangeForm
}