import React, { useState } from 'react';
import GoogleLogin from 'react-google-login'


const Login = (props) => {


    const [modal, setModal] = useState(props.bool);


    const toggle = () => setModal(!modal);
    const responseGoogle = (response) => {
        // var profile = response.getBasicProfile();
        // console.log('Email: ' + profile.getEmail()); 
        console.log(response);
        // console.log(response.profileObj);
    };
    return (
        <div>
            
            <div class="modal fade" id="Login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header' ><h5 class="modal-title" id="exampleModalLabel">Enter your username or password</h5>
                        </div>
                        < div className='modal-body'>
                            <form>
                                <div className='form-group'>
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a valid email" />
                                </div>
                                <div className='form-group'>
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                                </div>


                            </form>
                        </div>
                        <div className='modal-footer'>
                            <GoogleLogin
                                clientId="129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                onClick={toggle}
                            />
                            <button className='btn btn-success' >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;