import React from 'react';
import {connect} from 'react-redux'
import { actPasswordForgot } from '../action'
import Link from 'react-router-dom/es/Link';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';

import i18n from '../i18n'

const FormItem = Form.Item;

class ForgotPasswordPage extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }   
    
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.actPasswordForgot(values)
            }
        });

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { name, logo, width } = this.props.authConfig

        return(<Spin spinning={this.props.forgot}>
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
                                })(<Input prefix={<Icon type="mail" />} />)}
                            </FormItem>
                            <FormItem className="marT20">
                                <Button className="full-width" type="primary" htmlType="submit">
                                    {i18n.t('send')}
                                </Button>
                            </FormItem>
                            <FormItem className="text-center">
                                <Link to="/auth/login">
                                    <Icon type="login" /> {i18n.t('login')}
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
    actPasswordForgot
};

const mapStateToProps = (state) => ({
    forgot: state.passwordForgot.forgot
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)