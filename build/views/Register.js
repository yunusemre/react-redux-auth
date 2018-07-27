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

var RegisterPage = function (_React$Component) {
    _inherits(RegisterPage, _React$Component);

    function RegisterPage(props) {
        _classCallCheck(this, RegisterPage);

        var _this = _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this, props));

        _this.state = { confirmDirty: false };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);
        _this.checkPassword = _this.checkPassword.bind(_this);
        _this.checkConfirm = _this.checkConfirm.bind(_this);
        return _this;
    }

    _createClass(RegisterPage, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this2.props.actRegister(values);
                }
            });
        }
    }, {
        key: 'handleConfirmBlur',
        value: function handleConfirmBlur(e) {
            var value = e.target.value;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        }
    }, {
        key: 'checkPassword',
        value: function checkPassword(rule, value, callback) {
            var form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }
        }
    }, {
        key: 'checkConfirm',
        value: function checkConfirm(rule, value, callback) {
            var form = this.props.form;
            if (value && this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
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
                { spinning: this.props.reg },
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
                                {
                                    label: 'email',
                                    hasFeedback: true
                                },
                                getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email',
                                        message: 'this_field_reqired',
                                        required: true
                                    }]
                                })(_react2.default.createElement(_antd.Input, { placeholder: 'abc@abc.com' }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: 'password',
                                    hasFeedback: true
                                },
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: 'this_field_reqired'
                                    }, {
                                        validator: this.checkConfirm
                                    }]
                                })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: '******' }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: 'password_confirm',
                                    hasFeedback: true
                                },
                                getFieldDecorator('password_confirm', {
                                    rules: [{
                                        required: true,
                                        message: 'this_field_reqired'
                                    }, {
                                        validator: this.checkPassword
                                    }]
                                })(_react2.default.createElement(_antd.Input, {
                                    type: 'password',
                                    placeholder: '******',
                                    onBlur: this.handleConfirmBlur
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _react2.default.createElement(
                                        'span',
                                        null,
                                        'consumption_place'
                                    ),
                                    hasFeedback: true
                                },
                                getFieldDecorator('evidence', {
                                    rules: [{
                                        required: true,
                                        whitespace: true,
                                        message: 'this_field_reqired'
                                    }]
                                })(_react2.default.createElement(_antd.Input, {
                                    placeholder: 'consumption_place_placeholder'
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _react2.default.createElement(
                                        'span',
                                        null,
                                        'water_meter_id'
                                    ),
                                    hasFeedback: true
                                },
                                getFieldDecorator('water_meter_id', {
                                    rules: [{
                                        required: true,
                                        whitespace: true,
                                        message: 'this_field_reqired'
                                    }]
                                })(_react2.default.createElement(_antd.Input, {
                                    placeholder: 'water_meter_id_placeholder'
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                null,
                                _react2.default.createElement(
                                    _antd.Button,
                                    { className: 'full-width marT20', size: 'large', type: 'primary', htmlType: 'submit' },
                                    'register'
                                )
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/auth/login', className: 'text-center db marT10' },
                                _react2.default.createElement(_antd.Icon, { type: 'login' }),
                                ' Login'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RegisterPage;
}(_react2.default.Component);

RegisterPage.defaultProps = {
    reg: false
};

var Register = _antd.Form.create()(RegisterPage);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        reg: state.register.reg
    };
};

var mapDispatchToProps = {
    actRegister: _action.actRegister
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);