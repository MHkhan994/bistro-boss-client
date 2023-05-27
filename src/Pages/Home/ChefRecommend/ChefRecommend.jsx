import React, { useEffect, useState } from 'react';

const ChefRecommend = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu?category=offered')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    console.log(menu);

    return (
        <div>

        </div>
    );
};

export default ChefRecommend;