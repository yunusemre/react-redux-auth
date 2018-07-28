import HomePage from './views/Home'
import { Login, Register, ForgotPassword, ConfirmPassword } from 'rr-auth'

// import auth config
import authConfig from './config/auth'

export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/auth/login',
        component: Login,
        config: authConfig
    },
    {
        path: '/auth/register',
        component: Register,
        config: authConfig
    },
    {
        path: '/auth/forgot-password',
        component: ForgotPassword,
        config: authConfig
    },
    {
        path: '/auth/confirm-password/:uid/:token',
        component: ConfirmPassword,
        config: authConfig
    }
]