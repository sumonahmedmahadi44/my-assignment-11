import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';
import SetTitle from '../../../Hooks/SetTitle';

const AllToys = () => {
    SetTitle('allToys')
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
            <h2 className='text-center text-4xl font-bold  text-pink-400 border  border-black border-dashed mb-4 p-1 bg-emerald-200 mt-4'>All Toys Are here : {toys.length}</h2>
            <div className='text-center my-4'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search By Toy Name' className='p-1 border border-black me-4' />{" "}
                <button className='btn bg-pink-200 text-black' onClick={handleSearchBtn}>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra mb-10  w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th className='bg-pink-200 border border-black'>No.</th>
                            <th className='bg-pink-200 border border-black'>Seller Name</th>
                            <th className='bg-pink-200 border border-black'>Toy Name</th>
                            <th className='bg-pink-200 border border-black'>Toys Category</th>
                            <th className='bg-pink-200 border border-black'>Toys Price</th>
                            <th className='bg-pink-200 border border-black'>Toys Quantity</th>
                            <th className='bg-pink-200 border border-black'>Toys Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        
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