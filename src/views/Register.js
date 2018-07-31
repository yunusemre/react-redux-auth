import React from 'react';
import { connect } from 'react-redux'
import { actRegister } from '../action'
import { Link } from 'react-router-dom';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';

import i18n from '../i18n'
const FormItem = Form.Item;


class RegisterPage extends React.Component {
    constructor(props){
        super(props)
        this.state = { confirmDirty: false };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
        this.checkConfirm = this.checkConfirm.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.actRegister(values)
            }
        });

    }

    handleConfirmBlur(e){
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    checkPassword(rule, value, callback){
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    checkConfirm(rule, value, callback){
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const { name, logo, width } = this.props.authConfig

        return(
            <Spin spinning={this.props.reg}>
                <div className="auth">
                    <div className="auth__header">
                        <img src={logo} width={width} alt={name}/>    
                    </div> 
                    <div className="auth__content">
                        <Form className="auth__content--form" onSubmit={this.handleSubmit}>
                            <FormItem
                                label={i18n.t('email')}
                                hasFeedback
                            >
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: i18n.t('this_field_reqired'),
                                            required: true,
                                        },
                                    ],
                                })(<Input placeholder="abc@abc.com" />)}
                            </FormItem>
                            <FormItem
                                label={i18n.t('password')}
                                hasFeedback
                            >
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: i18n.t('this_field_reqired'),
                                        },
                                        {
                                            validator: this.checkConfirm,
                                        },
                                    ],
                                })(<Input type="password" placeholder="******" />)}
                            </FormItem>
                            <FormItem
                                label={i18n.t('password_confirm')}
                                hasFeedback
                            >
                                {getFieldDecorator('password_confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: i18n.t('this_field_reqired'),
                                        },
                                        {
                                            validator: this.checkPassword,
                                        },
                                    ],
                                })(
                                    <Input
                                        type="password"
                                        placeholder="******"
                                        onBlur={this.handleConfirmBlur}
                                    />,
                                )}
                            </FormItem>
                            <FormItem
                                label={i18n.t('consumption_place')}
                                hasFeedback
                            >
                                {getFieldDecorator('evidence', {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: i18n.t('this_field_reqired'),
                                        },
                                    ],
                                })(
                                    <Input
                                        placeholder={i18n.t('consumption_place_placeholder')}
                                    />
                                )}
                            </FormItem>
                            <FormItem
                                label={i18n.t('water_meter_id')} 
                                hasFeedback
                            >
                                {getFieldDecorator('water_meter_id', {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: i18n.t('this_field_reqired'),
                                        },
                                    ],
                                })(
                                    <Input
                                        placeholder={i18n.t('water_meter_id_placeholder')}
                                    />,
                                )}
                            </FormItem>
                            <FormItem>
                                <Button className="full-width marT20" size="large" type="primary" htmlType="submit">
                                {i18n.t('register')}
                                </Button>
                            </FormItem>
                            <Link to="/auth/login" className="text-center db marT10">
                                <Icon type="login" /> {i18n.t('login')}
                            </Link>
                            
                        </Form>
                    </div>
                </div>
            </Spin>
        );
    }
}

RegisterPage.defaultProps = {
    reg: false
}

const Register = Form.create()(RegisterPage);

const mapStateToProps = (state, ownProps) => ({
    reg: state.register.reg
})

const mapDispatchToProps = {  
    actRegister
};


export default connect(mapStateToProps, mapDispatchToProps)(Register)