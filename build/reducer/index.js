'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.users = users;
exports.logout = logout;
exports.register = register;
exports.passwordForgot = passwordForgot;
exports.confirmPassword = confirmPassword;

var _actionTypes = require('../action/actionTypes');

function login() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.USER_LOGGING_IN:
            return Object.assign({}, state, { login: action.payload, isLogin: true, loading: true });
        case _actionTypes.USER_LOGGED_IN:
            return Object.assign({}, state, { login: action.payload, isLogin: true, loading: false });
        case _actionTypes.USER_LOGGING_ERROR:
            return Object.assign({}, state, { message: action.message, isLogin: false, loading: false });
        default:
            return state;
    }
}

function users() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.USER_REQUEST:
        case _actionTypes.USER_SUCCESS:
            return Object.assign({}, state, { user: action.payload, isLogin: true });
        case _actionTypes.USER_FAILURE:
            return Object.assign({}, state, { message: action.message, isLogin: false });
        default:
            return state;
    }
}

function logout() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, { user: {}, isLogin: false });
        default:
            return state;
    }
}

function register() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.USER_REGISTER_REQUEST:
            return { reg: true };
        case _actionTypes.USER_REGISTER_SUCCESS:
            return { reg: false };
        case _actionTypes.USER_REGISTER_FAILURE:
            return { reg: false };
        default:
            return state;
    }
}

function passwordForgot() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.FORGOT_PASSWORD_REQUEST:
            return { forgot: true };
        case _actionTypes.FORGOT_PASSWORD_SUCCESS:
            return { forgot: false };
        case _actionTypes.FORGOT_PASSWORD_FAILURE:
            return { forgot: false };
        default:
            return state;
    }
}

function confirmPassword() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.CONFIRM_PASSWORD_REQUEST:
            return { confirm: true };
        case _actionTypes.CONFIRM_PASSWORD_SUCCESS:
            return { confirm: false };
        case _actionTypes.CONFIRM_PASSWORD_FAILURE:
            return { confirm: false };
        default:
            return state;
    }
}