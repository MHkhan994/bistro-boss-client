import React, { useContext } from 'react';
import loginImg from '../../assets/others/authentication.png'
import loginImg2 from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/UseAxionSecure';


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [axiosSecure] = useAxiosSecure()

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(password);

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        const user = { name: result.user.displayName, email: result.user.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire('account created successfully')
                                    form.reset()
                                    navigate('/login')
                                }
                            })
                    })
            }
            )
            .catch(error => console.log(error))
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center py-20' style={{ background: `url(${loginImg})`, backgroundSize: 'cover' }}>
            <Helmet>
                <title>Bistro boss - Sign Up</title>
            </Helmet>
            <div className='lg:px-16 border lg:w-[80%] items-center bg-transparent grid lg:grid-cols-2 lg:gap-10 gap-5' style={{ boxShadow: '6px 6px 6px 6px rgba(173,173,173)' }}>
                <img src={loginImg2} alt="" />
                <div className="card flex-shrink-0 w-full">
                    <form onSubmit={handleSignUp} className="card-body pb-3">
                        <h2 className='text-center font-semibold text-3xl'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name <span className='text-orange-500'>&#10034;</span></span>
                            </label>
                            <input required type="text" name='name' placeholder="name" className="input shadow-inner" />
                            <p className='text-xs ps-3'>this field is required</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className='text-orange-500'>&#10034;</span></span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input shadow-inner" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo <span className='text-orange-500'>&#10034;</span></span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input shadow-inner" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className='text-orange-500'>&#10034;</span></span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input shadow-inner" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#D1A054] text-white rounded-md h-12">Register</button>
                        </div>
                    </form>
                    <span className='text-center text-[#D1A054]'>Already have an account? <Link to='/login'>Login</Link></span>
                    <p className='text-center py-3'>Or sign up with</p>
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

export default Register;