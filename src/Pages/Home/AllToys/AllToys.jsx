import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, []);


    const handleSearchBtn = () => {
        fetch(`http://localhost:5000/searchByName/${search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                console.log(data);
            })
    }
    return (
        <div>
            <h2>All Toy Are here : {toys.length}</h2>
            <div className='text-center'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='p-1' />{" "}
                <button className='btn btn-primary' onClick={handleSearchBtn}>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Toys Category</th>
                            <th>Toys Price</th>
                            <th>Toys Quantity</th>
                            <th>Toys Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* <tr>
                            <th>{index + 1}</th>
                            <td>{user?.displayName}</td>
                            <td>{price}</td>
                            <td>{subCategory}</td>
                            <td>{toyName}</td>
                            <td>{quantity}</td>
                        </tr> */}
                        {
                            toys.map((toy, index) => <AllToy key={toy._id} index={index} toy={toy}></AllToy>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='w-full'>

            </div>
        </div>
    );
};

export default AllToys;