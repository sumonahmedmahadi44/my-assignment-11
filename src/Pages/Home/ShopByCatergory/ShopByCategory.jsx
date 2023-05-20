
import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const ShopByCategory = () => {
    const { loader } = useContext((AuthContext))
    if (loader) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${categories}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data)
            });
    }, [])

    const SportsCar = categories.filter((item) => item.subCategory === 'sportsCar')
    const OffRoadCar = categories.filter((item) => item.subCategory === 'offRoadCar')
    const RemoteCar = categories.filter((item) => item.subCategory === 'remoteCar')
    return (
       
        <div>
            <h2 className='text-center text-4xl font-bold  text-pink-400 border  border-black border-dashed mb-4 p-1 bg-emerald-200 mt-4'>Shop by Category</h2>
           

            <Tabs>
              
                <TabList className='flex justify-center gap-5 '>
                    {
                        SportsCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        OffRoadCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-secondary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        RemoteCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-warning' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                </TabList>


                <TabPanel className='flex justify-center gap-5 my-7'>
                    {SportsCar.slice(0, 2).map((category, index) => (
                        // <div>
                        //     <img src={category.subCategory} alt={''} />
                        //     <h3>{category.userName}</h3>
                        //     <p>Price: {category.price}</p>
                        //     <p>Rating: {category.ratings}</p>
                        //     <p>Category: {category.subCategory}</p>
                        //     <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        // </div>
                        <div className="card table w-96 h-64 bg-pink-200 shadow-xl image-full">
  <figure><img className='object-cover' src={category.image} alt="Shoes" /></figure>
  <div className="card-body">
  <h3 className='text-xl font-bold '><span className='fonot-bold text-xl me-2 underline text-black'>UserName</span>:  {category.userName}</h3>
                         <p className='text-xl font-bold '><span className='fonot-bold text-xl me-2 underline text-black'>Price</span>: {category.price}</p>
                            <p className='text-xl font-bold '><span className='fonot-bold text-xl me-2 underline text-black'>Rating</span>: {category.ratings}</p>
                            <p className='text-xl font-bold '><span className='fonot-bold text-xl me-2 underline text-black'>Category</span>: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn bg-pink-200 text-black p-4'>View Details</button></Link>
  </div>
</div>
                    ))}


                </TabPanel>

                <TabPanel>
                    {OffRoadCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subCategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>

                <TabPanel>
                    {RemoteCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subCategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;