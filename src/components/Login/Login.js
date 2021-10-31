import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Login.css';

const Login = () =>
{
    const { user,
        googleSignIn,
        isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log(isLoading);
    if (isLoading)
    {
        return <Spinner className="mt-5 text-center" animation="grow" />
    }
    // const handleGoogleLogin = () =>
    // {
    //     googleSignIn()
    //         .then(result =>
    //         {
    //             history.push(redirect_uri);
    //         })
    //         .finaly(() =>
    //         {
    //             // setIsLoading(false)
    //         })
    // }


    return (
        <div>
            <Header></Header>
            {/* condition  */}
            {user.email ? (
                // components
                location.state?.from == undefined ? (
                    history.push("/")
                ) : (
                    history.push(`${ location.state?.from?.pathname }`)
                )
            ) : (
                <div>
                    <div className="login-section">
                        <div className="login-area col-md-4">
                            <h3>Login With</h3>
                            <div className="img-body">
                                <img src="https://i.ibb.co/L6vY3VG/icons8-google-512.png" alt="" />
                            </div>
                            <div>
                                <Button onClick={googleSignIn}>Google</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <Footer></Footer>
        </div>
    );
};

export default Login;