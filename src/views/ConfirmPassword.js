import React from 'react';
import {connect} from 'react-redux'
import { actConfirmPassword } from '../action'
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Spin } from 'antd';
const FormItem = Form.Item;


class ConfirmPasswordPage extends React.Component {
    constructor(){
        super();
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
                const data = Object.assign({}, {uid: this.props.uid, token: this.props.token}, values )
                this.props.actConfirmPassword(data)
            }
        });
    }

    handleConfirmBlur(e){
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    checkPassword(rule, value, callback){
        const form = this.props.form;
        if (value && value !== form.getFieldValue('new_password1')) {
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

        return(<Spin spinning={this.props.confirm}>
                <div className="auth">
                    <div className="auth__header">
                        <img src={logo} width={width} alt={name}/>
                    </div> 
                    <div className="auth__content">
                        <Form className="auth__content--form" onSubmit={this.handleSubmit}>
                            <FormItem
                                label='new_password1'
                                hasFeedback
                            >
                                {getFieldDecorator('new_password1', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired',
                                        },
                                        {
                                            validator: this.checkConfirm,
                                        },
                                    ],
                                })(<Input type="password" placeholder="******" />)}
                            </FormItem>
                            <FormItem
                                label='new_password2'
                                hasFeedback
                            >
                                {getFieldDecorator('new_password2', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired',
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
                            <FormItem className="marT20">
                                <Button className="full-width" type="primary" htmlType="submit">
                                    Send
                                </Button>
                            </FormItem>
                            <FormItem className="text-center">
                                <Link to="/auth/login">
                                    <Icon type="login" /> Login
                                </Link>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </Spin>
        );
    }
}

const ConfirmPassword = Form.create()(ConfirmPasswordPage);
ConfirmPassword.defaultProps = {
    confirm: false
}

const mapDispatchToProps = {  
    actConfirmPassword
};

const mapStateToProps = (state) => {
    return {
        confirm: state.confirmPassword.confirm,
        uid: window.location.pathname.split('/')[3],
        token: window.location.pathname.split('/')[4]
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword)