import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/UseCart';
import useAxiosSecure from '../../../Hooks/UseAxionSecure';

const ShopCard = ({ item }) => {

    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart()
    const { name, recipe, image, _id, price } = item
    const location = useLocation()
    const navigate = useNavigate()

    const [axiosSecure] = useAxiosSecure()

    const handleAddtoCart = item => {
        if (user) {
            const checkItem = cart.find(i => i.itemId === _id)
            if (!checkItem) {
                const cartItem = { itemId: _id, name, image, email: user.email, price }
                axiosSecure('http://localhost:5000/carts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                })
                    .then(data => {
                        if (data.data.insertedId) {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Added to Cart',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
            else {
                Swal.fire(
                    'item already added',
                    'warning'
                )
            }

        }
        else {
            Swal.fire({
                title: 'Please login to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className=' bg-[#F3F3F3] shadow-lg border relative'>
            <img src={image} alt="" />
            <p className='absolute right-2 top-2 bg-gray-800 text-white px-3 py-1 rounded-md'>${item.price}</p>
            <div className='px-7 py-4'>
                <h2 className='text-center text-2xl font-semibold pb-3'>{name}</h2>
                <p className='text-gray-500'>{recipe}</p>
                <button onClick={() => handleAddtoCart(item)} className='my-btn-primary bg-[#E8E8E8] hover:text-[#BB8506]'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopCard;