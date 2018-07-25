import React from 'react';
import {connect} from 'react-redux'
import { passwordForgot } from '../../action'
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Spin } from 'antd';
const FormItem = Form.Item;


class ForgotPasswordPage extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }   
    
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.passwordForgot(values)
            }
        });

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {config} = this.props.config.auth;

        return(
            <Spin spinning={this.props.forgot}>
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
                                })(<Input prefix={<Icon type="mail" />} />)}
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

ForgotPasswordPage.defaultProps = {
    forgot: false
}

const ForgotPassword = Form.create()(ForgotPasswordPage);


const mapDispatchToProps = {  
    passwordForgot
};

const mapStateToProps = (state) => ({
    forgot: state.passwordForgot.forgot
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)