import React from 'react';
import {connect} from 'react-redux'
import { getLogin } from '../../action'
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Spin } from 'antd';
const FormItem = Form.Item;


class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }   
    
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.getLogin(values)
            }
        });

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {config} = this.props.config.auth;

        return(
            <Spin spinning={this.props.loading}>
                <div className="auth">
                    <div className="auth__header">
                        <img src={config.logo} width="150" alt="lvs company"/>
                    </div> 
                    <div className="auth__content">
                        <Form className="auth__content--form" onSubmit={this.handleSubmit}>
                            <FormItem label="email" hasFeedback>
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired',
                                            whitespace: true,
                                        }
                                    ],
                                })(<Input prefix={<Icon type="user" />} />)}
                            </FormItem>
                            <FormItem label="password" hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired',
                                            whitespace: true,
                                        },
                                    ],
                                })(<Input prefix={<Icon type="lock" />} type="password" />)}
                            </FormItem>
                            <FormItem>
                                <label style={{ float: 'left' }}>
                                    <Link to="/auth/register">
                                        <Icon type="user-add" />{' '}
                                            register
                                    </Link>
                                </label>
                                <label style={{ float: 'right' }}>
                                    <Link to="/auth/forgot-password">
                                        forget_password
                                    </Link>
                                </label>
                            </FormItem>
                            <FormItem>
                                <Button className="full-width marT20" type="primary" size="large" icon="login" htmlType="submit" >
                                    Login
                                </Button>
                            </FormItem>
                            
                        </Form>
                    </div>
                </div>
            </Spin>
        );
    }
}

LoginPage.defaultProps = {
    loading: false
}

const Login = Form.create()(LoginPage);

const mapStateToProps = (state) => ({
        auth: state.login,
        loading: state.login.loading
})

const mapDispatchToProps = {  
    getLogin
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)