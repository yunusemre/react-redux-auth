import { login, users, register, passwordForgot, confirmPassword} from './reducer/auth_reducer'
import Login from './views/Login'
import Register from './views/Register'
import ConfirmPassword from './views/ConfirmPassword'
import ForgetPassword from './views/ForgetPassword'
import { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser } from './action';

export const AuthActions = { actLogin, actRegister, actPasswordForgot, actConfirmPassword, actLogOut, actGetUser };
export const Views = { Login, Register, ConfirmPassword, ForgetPassword };
export const authStateReducer = combineReducers({
    login, users, register, passwordForgot, confirmPassword
})