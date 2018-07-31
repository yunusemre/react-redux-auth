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

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

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
                _spin2.default,
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
                            _form2.default,
                            { className: 'auth__content--form', onSubmit: this.handleSubmit },
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _i18n2.default.t('email'),
                                    hasFeedback: true
                                },
                                getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email',
                                        message: _i18n2.default.t('this_field_reqired'),
                                        required: true
                                    }]
                                })(_react2.default.createElement(_input2.default, { placeholder: 'abc@abc.com' }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _i18n2.default.t('password'),
                                    hasFeedback: true
                                },
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: _i18n2.default.t('this_field_reqired')
                                    }, {
                                        validator: this.checkConfirm
                                    }]
                                })(_react2.default.createElement(_input2.default, { type: 'password', placeholder: '******' }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _i18n2.default.t('password_confirm'),
                                    hasFeedback: true
                                },
                                getFieldDecorator('password_confirm', {
                                    rules: [{
                                        required: true,
                                        message: _i18n2.default.t('this_field_reqired')
                                    }, {
                                        validator: this.checkPassword
                                    }]
                                })(_react2.default.createElement(_input2.default, {
                                    type: 'password',
                                    placeholder: '******',
                                    onBlur: this.handleConfirmBlur
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _i18n2.default.t('consumption_place'),
                                    hasFeedback: true
                                },
                                getFieldDecorator('evidence', {
                                    rules: [{
                                        required: true,
                                        whitespace: true,
                                        message: _i18n2.default.t('this_field_reqired')
                                    }]
                                })(_react2.default.createElement(_input2.default, {
                                    placeholder: _i18n2.default.t('consumption_place_placeholder')
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                {
                                    label: _i18n2.default.t('water_meter_id'),
                                    hasFeedback: true
                                },
                                getFieldDecorator('water_meter_id', {
                                    rules: [{
                                        required: true,
                                        whitespace: true,
                                        message: _i18n2.default.t('this_field_reqired')
                                    }]
                                })(_react2.default.createElement(_input2.default, {
                                    placeholder: _i18n2.default.t('water_meter_id_placeholder')
                                }))
                            ),
                            _react2.default.createElement(
                                FormItem,
                                null,
                                _react2.default.createElement(
                                    _button2.default,
                                    { className: 'full-width marT20', size: 'large', type: 'primary', htmlType: 'submit' },
                                    _i18n2.default.t('register')
                                )
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/auth/login', className: 'text-center db marT10' },
                                _react2.default.createElement(_icon2.default, { type: 'login' }),
                                ' ',
                                _i18n2.default.t('login')
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

var Register = _form2.default.create()(RegisterPage);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        reg: state.register.reg
    };
};

var mapDispatchToProps = {
    actRegister: _action.actRegister
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);