import React, { useEffect, useState } from 'react';

import loginImg from '../../assets/others/authentication.png'
import loginImg2 from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleCaptcha = (e) => {
        const userCaptcha = e.target.value;
        if (userCaptcha.length === 6) {
            if (validateCaptcha(userCaptcha)) {
                setDisabled(false)
            }
            else {
                setDisabled(true)
            }
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center py-20' style={{ background: `url(${loginImg})`, backgroundSize: 'cover' }}>
            <div className='lg:px-16 border lg:w-[80%] items-center bg-transparent grid lg:grid-cols-2 lg:gap-10 gap-5' style={{ boxShadow: '6px 6px 6px 6px rgba(173,173,173)' }}>
                <img src={loginImg2} alt="" />
                <div className="card flex-shrink-0 w-full">
                    <form onSubmit={handleLogin} className="card-body pb-3">
                        <h2 className='text-center font-semibold text-3xl'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input shadow-inner" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input shadow-inner" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate className='w-full' />
                            </label>
                            <input onChange={handleCaptcha} type="text" name='password' placeholder='type above captcha' className="input shadow-inner" />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className={disabled ? "bg-[#9c9c9c] text-white rounded-md h-12" : "bg-[#D1A054] text-white rounded-md h-12"}>Login</button>
                        </div>
                    </form>
                    <span className='text-center text-[#D1A054]'>New here? <Link to='/register'>Create a New Account</Link></span>
                    <p className='text-center py-3'>Or sign In with</p>
                    <div className='flex justify-center gap-4 pb-10'>
                        <button className='px-2 py-2 border-2 border-black rounded-full'>
                            <FaFacebookF></FaFacebookF>
                        </button>
                        <button className='px-2 py-2 border-2 border-black rounded-full'>
                            <FaGoogle></FaGoogle>
                        </button>
                        <button className='px-2 py-2 border-2 border-black rounded-full'>
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;