import React from 'react';
import {connect} from 'react-redux'
import { actConfirmPassword } from '../action'
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, Spin } from 'antd';
const FormItem = Form.Item;


class ConfirmPasswordPage extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
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

    checkPassword(rule, value, callback){
        const form = this.props.form;
        if (value && value !== form.getFieldValue('new_password2')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const {config} = this.props.config.auth;

        return(<Spin spinning={this.props.confirm}>
                <div className="auth">
                    <div className="auth__header">
                        <img src={config.logo} width="150" alt="lvs company"/>
                    </div> 
                    <div className="auth__content">
                        <Form className="auth__content--form" onSubmit={this.handleSubmit}>
                        <FormItem label='password' hasFeedback>
                                {getFieldDecorator('new_password1', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired'
                                        }
                                    ],
                                })(<Input type="password" />)}
                            </FormItem>
                            <FormItem
                                label='confirm_password'
                                hasFeedback
                            >
                                {getFieldDecorator('new_password2', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'this_field_reqired'
                                        }
                                    ],
                                })(
                                    <Input
                                        type="password"
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

const mapStateToProps = (state, ownProps) => ({
    confirm: state.confirmPassword.confirm,
    uid: ownProps.match.params.uid,
    token: ownProps.match.params.token
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword)