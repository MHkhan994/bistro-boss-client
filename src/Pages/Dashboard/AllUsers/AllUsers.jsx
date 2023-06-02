import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/UseAxionSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure('/users')
        return res.data
    })

    const handleMakeAdmin = (id) => {
        axiosSecure(`/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'made admin',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <button onClick={() => handleMakeAdmin(user._id)} className='text-white bg-primary rounded-md px-3 py-3'>
                                                    <FaUserShield className='text-lg'></FaUserShield>
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button className='text-white bg-red-600 rounded-md px-3 py-3'>
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;