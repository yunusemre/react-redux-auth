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

var ForgotPasswordPage = function (_React$Component) {
    _inherits(ForgotPasswordPage, _React$Component);

    function ForgotPasswordPage(props) {
        _classCallCheck(this, ForgotPasswordPage);

        var _this = _possibleConstructorReturn(this, (ForgotPasswordPage.__proto__ || Object.getPrototypeOf(ForgotPasswordPage)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(ForgotPasswordPage, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this2.props.actPasswordForgot(values);
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
                { spinning: this.props.forgot },
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
                                })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'mail' }) }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                { className: 'marT20' },
                                _react2.default.createElement(
                                    _antd.Button,
                                    { className: 'full-width', type: 'primary', htmlType: 'submit' },
                                    'Send'
                                )
                            ),
                            _react2.default.createElement(
                                FormItem,
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/auth/login' },
                                    _react2.default.createElement(_antd.Icon, { type: 'login' }),
                                    ' Login'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ForgotPasswordPage;
}(_react2.default.Component);

ForgotPasswordPage.defaultProps = {
    forgot: false
};

var ForgotPassword = _antd.Form.create()(ForgotPasswordPage);

var mapDispatchToProps = {
    actPasswordForgot: _action.actPasswordForgot
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        forgot: state.passwordForgot.forgot
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ForgotPassword);