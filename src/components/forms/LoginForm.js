import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends Component {
    state={ 
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }
    onChange = e =>
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value }
    })
    render() {
        const { data } = this.state;
        return (
            <Form>
            <Form.Field>
                <label htmlFor="email">Email</label>
                <input 
                name="email" 
                id="email" 
                onChange={ this.onChange } 
                placeholder="example@example.com"
                value={ data.email }/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password</label>
                <input 
                name="password" 
                id="password" 
                onChange={ this.onChange } 
                placeholder="Make it secure"
                value={ data.password }/>
            </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;