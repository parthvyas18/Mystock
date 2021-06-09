import React from 'react';
const Register = () => {
    return (
        <div>
            <div class="modal fade" id="Register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header' ><h5 class="modal-title" id="exampleModalLabel">Enter your username or password</h5>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className='form-group'>
                                    <label for="Rusrname">Username</label>
                                    <input type="email" name="email" class="form-control" id="Rusrname" placeholder="Enter  username" />
                                </div>
                                <div className='form-group'>
                                    <label for="RPassword">Password</label>
                                    <input type="password" name="password"  class="form-control" id="RPassword" placeholder="Enter password" />
                                </div>
                                <div className='form-group'>
                                    <label for="REmail">Email</label>
                                    <input type="email" name="email" class="form-control" id="REmail" placeholder="Enter a valid email" />
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            {/* <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#Login" to="/Login"> If you are already registered</a> */}
                            <button className='btn btn-success'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Register;