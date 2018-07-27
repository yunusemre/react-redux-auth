import { USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGGING_ERROR, USER_REQUEST, USER_SUCCESS, USER_FAILURE, LOGOUT_SUCCESS, LOGOUT_REQUEST, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, CONFIRM_PASSWORD_REQUEST, CONFIRM_PASSWORD_SUCCESS, CONFIRM_PASSWORD_FAILURE } from '../action/actionTypes'

const initialAuthState = {
    login: {},
    message: '',
    isLogin: false,
    loading: false
}

export function login(state = {}, action){
    switch (action.type) {
        case USER_LOGGING_IN:
            return Object.assign({}, state, { login: action.payload, isLogin: true, loading: true })
        case USER_LOGGED_IN: 
            return Object.assign({}, state, { login: action.payload, isLogin: true, loading: false })
        case USER_LOGGING_ERROR: 
            return Object.assign({}, state, { message: action.message, isLogin: false, loading: false })
        default:
            return state
    }
}

export function users(state = {}, action){
    switch (action.type) {
        case USER_REQUEST:
        case USER_SUCCESS: 
            return Object.assign({}, state, {user: action.payload, isLogin: true} )
        case USER_FAILURE: 
            return Object.assign({}, state, { message: action.message, isLogin: false })
        default:
            return state
    }
}

export function logout(state = {}, action){
    switch (action.type) {
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS: 
            return Object.assign({}, state, {user: {}, isLogin: false} )
        default:
            return state
    }
}

export function register(state = {}, action){
    switch (action.type) {
        case USER_REGISTER_REQUEST:
        return { reg: true}
        case USER_REGISTER_SUCCESS: 
            return { reg: false}
        case USER_REGISTER_FAILURE:
            return {reg: false}
        default:
            return state
    }
}

export function passwordForgot(state = {}, action){
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        return { forgot: true}
        case FORGOT_PASSWORD_SUCCESS: 
            return { forgot: false}
        case FORGOT_PASSWORD_FAILURE:
            return {forgot: false}
        default:
            return state
    }
}

export function confirmPassword(state = {}, action){
    switch (action.type) {
        case CONFIRM_PASSWORD_REQUEST:
        return { confirm: true}
        case CONFIRM_PASSWORD_SUCCESS: 
            return { confirm: false}
        case CONFIRM_PASSWORD_FAILURE:
            return {confirm: false}
        default:
            return state
    }
}


