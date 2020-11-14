import React, {useEffect, useState} from 'react';
import Page from './Page';
import Axios from 'axios';

function HomeGuest(props) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorUserName, setErrorUserName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const _handlerValidate = () => {
        // userName: không được rỗng. độ dài của username phải hơn 6 ký tự khanhvb
        // email đúng dạng
        // password có chữ cái viết hoa,viết thường, có số và ký tự đặc biêt, có độ dài ít nhất 8 ký tự
        // success => thành công
        // fail =>  báo message
        let regexUserName = /^\w{6,}/;
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let regexPassword = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        regexUserName.test(userName)
            ? setErrorUserName(true)
            : alert('User Name phải lớn hơn 6 ký tự');
        regexEmail.test(email)
            ? setErrorEmail(true)
            : alert('Email không đúng định dạng');
        regexPassword.test(password)
            ? setErrorPassword(true)
            : alert(
                  'password phải lớn hơn 8 ký tự, có chữ cái viết hoa, viết thường, có số, chứa ít nhất một ký tự đặc biệt'
              );

        if (errorUserName && errorEmail && errorPassword) {
            setFormValid(true);
        }
    };

    const _onHandlerChange = (event) => {
        const target = event.target;
        const currentName = target.name;
        switch (currentName) {
            case 'username':
                setUserName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    };

    const _onHandlerSubmit = async (event) => {
        event.preventDefault();
        _handlerValidate();
        console.log('submit');
        console.log({username: userName, email: email, password: password});
        if (formValid) {
            console.log('async');
            try {
                await Axios.post('http://localhost:8085/register', {
                    username: userName,
                    email: email,
                    password: password,
                });
                console.log({userName, email, password});
                console.log('add user into database success');
            } catch (error) {
                console.log('Can not add user into database');
                console.log(error.message);
            }
        }
        console.log('done');
    };

    return (
        <Page title="Home Guest">
            <div className="row align-items-center">
                <div className="col-lg-7 py-3 py-md-5">
                    <h1 className="display-3">Remember Writing?</h1>
                    <p className="lead text-muted">
                        Are you sick of short tweets and impersonal
                        &ldquo;shared&rdquo; posts that are reminiscent of the
                        late 90&rsquo;s email forwards? We believe getting back
                        to actually writing is the key to enjoying the internet
                        again.
                    </p>
                </div>
                <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
                    <form onSubmit={_onHandlerSubmit}>
                        <div className="form-group">
                            <label
                                htmlFor="username-register"
                                className="text-muted mb-1"
                            >
                                <small>Username</small>
                            </label>
                            <input
                                id="username-register"
                                name="username"
                                className="form-control"
                                type="text"
                                placeholder="Pick a username"
                                autoComplete="off"
                                onChange={_onHandlerChange}
                                value={userName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="email-register"
                                className="text-muted mb-1"
                            >
                                <small>Email</small>
                            </label>
                            <input
                                id="email-register"
                                name="email"
                                className="form-control"
                                type="text"
                                placeholder="you@example.com"
                                autoComplete="off"
                                onChange={_onHandlerChange}
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="password-register"
                                className="text-muted mb-1"
                            >
                                <small>Password</small>
                            </label>
                            <input
                                id="password-register"
                                name="password"
                                className="form-control"
                                type="password"
                                placeholder="Create a password"
                                onChange={_onHandlerChange}
                                value={password}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 mt-4 btn btn-lg btn-success btn-block"
                        >
                            Sign up for ComplexApp
                        </button>
                    </form>
                </div>
            </div>
        </Page>
    );
}

export default HomeGuest;
