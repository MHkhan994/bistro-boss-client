import React from 'react';
import useCart from '../../../Hooks/UseCart';
import SectionTop from '../../../Components/SectionTop';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }


    return (
        <div>
            <SectionTop
                heading='wanna add more'
                subHeading='My cart'
            >
            </SectionTop>
            <div className='bg-white p-8'>
                <div className='flex justify-between items-center h-full'>
                    <h2 className='text-2xl font-semibold uppercase'>Total orders: {cart.length}</h2>
                    <h2 className='text-2xl font-semibold uppercase'>Total Price: {totalPrice}$</h2>
                    <button className='bg-primary px-4 text-white py-2 text-lg rounded-md'>Pay</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full mt-8">
                        {/* head */}
                        <thead>
                            <tr >
                                <th>
                                </th>
                                <th>item name</th>
                                <th>item image</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) =>
                                    <tr
                                        key={item._id}
                                    >
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <img className='h-12' src={item.image} alt="" />
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            ${item.price}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className='text-white bg-red-600 rounded-md px-3 py-3'>
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;