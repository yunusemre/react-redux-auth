import React from 'react';
import { connect } from 'react-redux'
import { actRegister } from '../action'
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Spin } from 'antd';
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
                                label='email'
                                hasFeedback
                            >
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'this_field_reqired',
                                            required: true,
                                        },
                                    ],
                                })(<Input placeholder="abc@abc.com" />)}
                            </FormItem>
                            <FormItem
                                label='password'
                                hasFeedback
                            >
                                {getFieldDecorator('password', {
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
                                label='password_confirm'
                                hasFeedback
                            >
                                {getFieldDecorator('password_confirm', {
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
                            <FormItem
                                label={<span>consumption_place</span>}
                                hasFeedback
                            >
                                {getFieldDecorator('evidence', {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: 'this_field_reqired',
                                        },
                                    ],
                                })(
                                    <Input
                                        placeholder='consumption_place_placeholder'
                                    />,
                                )}
                            </FormItem>
                            <FormItem
                                label={<span>water_meter_id</span>}
                                hasFeedback
                            >
                                {getFieldDecorator('water_meter_id', {
                                    rules: [
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: 'this_field_reqired',
                                        },
                                    ],
                                })(
                                    <Input
                                        placeholder='water_meter_id_placeholder'
                                    />,
                                )}
                            </FormItem>
                            <FormItem>
                                <Button className="full-width marT20" size="large" type="primary" htmlType="submit">
                                    register
                                </Button>
                            </FormItem>
                            <Link to="/auth/login" className="text-center db marT10">
                                <Icon type="login" /> Login
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