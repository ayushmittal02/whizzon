import React from 'react';
import './Signin.css'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://ancient-harbor-64094.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5'>
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email-address" id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password" id="password"
                                    onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                                type="submit" value="Sign In" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f5 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;