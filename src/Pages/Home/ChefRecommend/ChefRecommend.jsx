import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/UseAxionSecure';

const ChefRecommend = () => {

    const [menu, setMenu] = useState([])

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure('/menu?category=offered')
            .then(data => setMenu(data.data))
    }, [])

    console.log(menu);

    return (
        <div>

        </div>
    );
};

export default ChefRecommend;