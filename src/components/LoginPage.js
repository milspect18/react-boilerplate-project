import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ login }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tagline for app</p>
            <button
                className="button"
                onClick={login}
            >
                Login with Google
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
