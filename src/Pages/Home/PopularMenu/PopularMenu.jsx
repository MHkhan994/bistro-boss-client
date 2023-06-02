import React, { useEffect, useState } from 'react';
import SectionTop from '../../../Components/SectionTop';
import MenuItem from '../../Shared/MenuItem';
import useAxiosSecure from '../../../Hooks/UseAxionSecure';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure('/menu?category=popular')
            .then(res => setMenu(res.data))
    }, [])


    return (
        <div className='my-container'>
            <SectionTop subHeading={'Check it out'} heading={'FROM OUR MENU'}>

            </SectionTop>
            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='my-btn-primary'>View full menu</button>
        </div>
    );
};

export default PopularMenu;