import React from 'react';
import {connect} from 'react-redux'
import { actLogin } from '../action'
import {Link} from 'react-router-dom'
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';
    
import i18n from '../i18n'

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
                this.props.actLogin(values)
            }
        });

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { name, logo, width } = this.props.authConfig

        return(<Spin spinning={this.props.loading}>
                <div className="auth">
                    <div className="auth__header">
                        <img src={logo} width={width} alt={name}/>
                    </div> 
                    <div className="auth__content">
                        <Form className="auth__content--form" onSubmit={this.handleSubmit}>
                            <FormItem label={i18n.t('email')} hasFeedback>
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            required: true,
                                            message: i18n.t('this_field_reqired'),
                                            whitespace: true,
                                        }
                                    ],
                                })(<Input prefix={<Icon type="user" />} />)}
                            </FormItem>
                            <FormItem label={i18n.t('password')} hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: i18n.t('this_field_reqired'),
                                            whitespace: true,
                                        },
                                    ],
                                })(<Input prefix={<Icon type="lock" />} type="password" />)}
                            </FormItem>
                            <FormItem>
                                <label style={{ float: 'left' }}>
                                    <Link to="/auth/register">
                                        <Icon type="user-add" />{' '}
                                        {i18n.t('register')}
                                    </Link>
                                </label>
                                <label style={{ float: 'right' }}>
                                    <Link to="/auth/forgot-password">
                                        {i18n.t('forget_password')}
                                    </Link>
                                </label>
                            </FormItem>
                            <FormItem>
                                <Button className="full-width marT20" type="primary" size="large" icon="login" htmlType="submit" >
                                    {i18n.t('login')}
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
    actLogin
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)