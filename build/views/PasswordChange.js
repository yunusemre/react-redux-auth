'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _action = require('../action');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var PasswordChangeContent = function (_React$Component) {
    _inherits(PasswordChangeContent, _React$Component);

    function PasswordChangeContent(props) {
        _classCallCheck(this, PasswordChangeContent);

        var _this = _possibleConstructorReturn(this, (PasswordChangeContent.__proto__ || Object.getPrototypeOf(PasswordChangeContent)).call(this, props));

        _this.state = {
            confirmDirty: null
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);
        _this.checkPassword = _this.checkPassword.bind(_this);
        _this.checkConfirm = _this.checkConfirm.bind(_this);
        return _this;
    }

    _createClass(PasswordChangeContent, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this2.props.actPasswordChange(values);
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
            if (value && value !== form.getFieldValue('new_password2')) {
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

            return _react2.default.createElement(
                _form2.default,
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    FormItem,
                    {
                        label: _i18n2.default.t('current_password'),
                        hasFeedback: true
                    },
                    getFieldDecorator('old_password', {
                        rules: [{
                            required: true,
                            message: _i18n2.default.t('this_field_reqired')
                        }]
                    })(_react2.default.createElement(_input2.default, { type: 'password' }))
                ),
                _react2.default.createElement(
                    FormItem,
                    {
                        label: _i18n2.default.t('new_password'),
                        hasFeedback: true
                    },
                    getFieldDecorator('new_password1', {
                        rules: [{
                            required: true,
                            message: _i18n2.default.t('this_field_reqired')
                        }]
                    })(_react2.default.createElement(_input2.default, { type: 'password' }))
                ),
                _react2.default.createElement(
                    FormItem,
                    {
                        label: _i18n2.default.t('confirm_new_password'),
                        hasFeedback: true
                    },
                    getFieldDecorator('new_password2', {
                        rules: [{
                            required: true,
                            message: _i18n2.default.t('this_field_reqired')
                        }, {
                            validator: this.checkPassword
                        }]
                    })(_react2.default.createElement(_input2.default, {
                        type: 'password',
                        onBlur: this.handleConfirmBlur
                    }))
                ),
                _react2.default.createElement(
                    FormItem,
                    null,
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', htmlType: 'submit' },
                        _i18n2.default.t('save'),
                        ' '
                    )
                )
            );
        }
    }]);

    return PasswordChangeContent;
}(_react2.default.Component);

var PasswordChangeForm = _form2.default.create()(PasswordChangeContent);

var mapDispatchToProps = {
    actPasswordChange: _action.actPasswordChange
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PasswordChangeForm);