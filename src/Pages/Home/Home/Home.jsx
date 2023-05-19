import React, { useEffect, useState } from 'react';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/subCategory')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, []);
    return (
        <div>
            <h1>There are :{toys.length} Toys</h1>
          
            {
                toys.map(toy =><ShopByCategory key={toy._id} toy = {toy}></ShopByCategory> )
            }
            
        </div>
    );
};

export default Home;