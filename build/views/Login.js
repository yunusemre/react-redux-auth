'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _action = require('../action');

var _reactRouterDom = require('react-router-dom');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this2.props.actLogin(values);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;
            var _props$authConfig = this.props.authConfig,
                name = _props$authConfig.name,
                logo = _props$authConfig.logo,
                width = _props$authConfig.width;


            return _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.loading },
                _react2.default.createElement(
                    'div',
                    { className: 'auth' },
                    _react2.default.createElement(
                        'div',
                        { className: 'auth__header' },
                        _react2.default.createElement('img', { src: logo, width: width, alt: name })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'auth__content' },
                        _react2.default.createElement(
                            _antd.Form,
                            { className: 'auth__content--form', onSubmit: this.handleSubmit },
                            _react2.default.createElement(
                                FormItem,
                                { label: 'email', hasFeedback: true },
                                getFieldDecorator('email', {
                                    rules: [{
                                        required: true,
                                        message: 'this_field_reqired',
                                        whitespace: true
                                    }]
                                })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user' }) }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                { label: 'password', hasFeedback: true },
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: 'this_field_reqired',
                                        whitespace: true
                                    }]
                                })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock' }), type: 'password' }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                null,
                                _react2.default.createElement(
                                    'label',
                                    { style: { float: 'left' } },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/auth/register' },
                                        _react2.default.createElement(_antd.Icon, { type: 'user-add' }),
                                        ' ',
                                        'register'
                                    )
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { style: { float: 'right' } },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/auth/forgot-password' },
                                        'forget_password'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                FormItem,
                                null,
                                _react2.default.createElement(
                                    _antd.Button,
                                    { className: 'full-width marT20', type: 'primary', size: 'large', icon: 'login', htmlType: 'submit' },
                                    'Login'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

LoginPage.defaultProps = {
    loading: false
};

var Login = _antd.Form.create()(LoginPage);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.login,
        loading: state.login.loading
    };
};

var mapDispatchToProps = {
    actLogin: _action.actLogin
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);