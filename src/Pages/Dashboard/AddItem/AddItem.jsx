import React from 'react';
import SectionTop from '../../../Components/SectionTop';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/UseAxionSecure';

const img_hosting_token = import.meta.env.VITE_Image_Token

const AddItem = () => {

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.photo[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.display_url;
                    const { recipeName, price, details, category } = data
                    const menuItem = { name: recipeName, price: parseFloat(price), details, category, image: imgURL }
                    axiosSecure.post('/menu', menuItem)
                        .then(data => {
                            console.log(data);
                        })
                }
            })
    };
    console.log(errors);
    console.log(img_hosting_token);

    return (
        <div className='lg:px-10'>
            <SectionTop
                heading='add an item'
                subHeading="what's new?"
            ></SectionTop>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#E8E8E8] p-10 grid gap-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Recipe Name <span className='text-orange-500'>&#10034;</span></span>
                    </label>
                    <input type="text" placeholder="Recipe name" className="input input-bordered" {...register("recipeName", { required: true })} />
                </div>

                <div className='flex flex-col lg:flex-row w-full gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Category <span className='text-orange-500'>&#10034;</span></span>
                        </label>
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled selected>Pick Recipe Category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Price <span className='text-orange-500'>&#10034;</span></span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered" {...register("price", { required: true, min: 0 })} />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Recipe Details <span className='text-orange-500'>&#10034;</span></span>
                    </label>
                    <textarea className="textarea textarea-bordered h-44 resize-none" placeholder="Recipe Details" {...register("details", { required: true })}></textarea>
                </div>

                <div className="form-control">
                    <input type="file" className="file-input file-input-disabled w-full max-w-xs bg-gray-300" {...register("photo")} />
                </div>

                <div className="form-control">
                    <button className='bg-[#835D23] h-12 w-32 text-white'>Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;