import React, { useEffect, useState } from 'react';

const ChefRecommend = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'offered')))
    }, [])

    console.log(menu);

    return (
        <div>

        </div>
    );
};

export default ChefRecommend;