import React, { useEffect, useState } from 'react';
import SectionTop from '../../../Components/SectionTop';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'popular')))
    }, [])

    console.log(menu);

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