import React from 'react';
import {connect} from 'react-redux'
import { actPasswordChange } from '../action'
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import i18n from '../i18n'

const FormItem = Form.Item;

class PasswordChangeContent extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            confirmDirty: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
        this.checkConfirm = this.checkConfirm.bind(this)
    }   
    
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.actPasswordChange(values);
            }
        });
    };

    handleConfirmBlur(e){
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    checkPassword(rule, value, callback){
        const form = this.props.form;
        if (value && value !== form.getFieldValue('new_password2')) {
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
        return(
        <Form onSubmit={this.handleSubmit}>
            <FormItem
                label={i18n.t('current_password')}
                hasFeedback
            >
                {getFieldDecorator('old_password', {
                    rules: [
                        {
                            required: true,
                            message: i18n.t(
                                'this_field_reqired',
                            ),
                        },
                    ],
                })(<Input type="password" />)}
            </FormItem>
            <FormItem
                label={i18n.t('new_password')}
                hasFeedback
            >
                {getFieldDecorator('new_password1', {
                    rules: [
                        {
                            required: true,
                            message: i18n.t(
                                'this_field_reqired',
                            ),
                        },
                    ],
                })(<Input type="password" />)}
            </FormItem>
            <FormItem
                label={i18n.t('confirm_new_password')}
                hasFeedback
            >
                {getFieldDecorator('new_password2', {
                    rules: [
                        {
                            required: true,
                            message: i18n.t(
                                'this_field_reqired',
                            ),
                        },
                        {
                            validator: this.checkPassword,
                        },
                    ],
                })(
                    <Input
                        type="password"
                        onBlur={this.handleConfirmBlur}
                    />,
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">
                    {i18n.t('save')}{' '}
                </Button>
            </FormItem>
        </Form>
        );
    }
}

const PasswordChangeForm = Form.create()(PasswordChangeContent);

const mapDispatchToProps = {  
    actPasswordChange
};


export default connect(null, mapDispatchToProps)(PasswordChangeForm)