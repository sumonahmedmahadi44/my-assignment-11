
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

    const marvelCars = categories.filter((item) => item.subcategory === 'Engineering')
    console.log(marvelCars);
    const tarzenCar = categories.filter((item) => item.subcategory === 'writer')
    const fantasyCar = categories.filter((item) => item.subcategory === 'Editor')
    return (
        <div>
            <div>
            <h2>Shop by Category</h2>
           

            <Tabs>
              
                <TabList>
                    {
                        marvelCars.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subcategory}</Tab>
                        ))
                    }
                    {
                        tarzenCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subcategory}</Tab>
                        ))
                    }
                    {
                        fantasyCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subcategory}</Tab>
                        ))
                    }
                </TabList>


                <TabPanel>
                    {marvelCars.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subcategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subcategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}


                </TabPanel>

                <TabPanel>
                    {tarzenCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subcategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subcategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>

                <TabPanel>
                    {fantasyCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subcategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subcategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
        </div>
    );
};

export default ShopByCategory;