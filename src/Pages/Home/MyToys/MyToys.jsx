import React, { useContext, useEffect, useState } from 'react';
import Swal from "sweetalert2";
import ShowMyToys from './ShowMyToys';
import { AuthContext } from '../../../Provider/AuthProvider';
import SetTitle from '../../../Hooks/SetTitle';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    const [sort,setSort] = useState('');
    // const [loadedUser, setLoadedUser] = useState([]);

    const handleDelete = (_id) => {
        SetTitle('myToys')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed){
                fetch(`https://unique-car-toys-server.vercel.app/post-toys/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      );
                      const remaining = myToys.filter(users => users._id !== _id);
                      setMyToys(remaining);
                      
                }
                
               
               
            })
            }
        })
    }
    useEffect(() => {
        fetch(`https://unique-car-toys-server.vercel.app/myToys/${user?.email}?price=${sort}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user,sort])
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-center text-4xl font-bold  text-pink-400 border  border-black border-dashed mb-4 p-1 bg-emerald-200" >My Toys ({myToys.length})</h2>
                <button className='btn btn-secondary mx-4' onClick={()=>setSort('ascending')}>Ascending by Price</button>
                <button className='btn btn-secondary mx-4' onClick={()=>setSort('descending')}>Descending by Price</button>


                <div className="overflow-x-auto mt-8  w-full">
                    <table className="table w-full mb-10">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-pink-200 border border-black'>
                                    <button className="btn btn-sm btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <th className='bg-pink-200 border border-black'>Toy Photo</th>
                                <th className='bg-pink-200 border border-black'>Toy Name</th>
                                
                                <th className='bg-pink-200 border border-black'>Seller Name</th>
                                <th className='bg-pink-200 border border-black'>Seller email</th>
                                <th className='bg-pink-200 border border-black'>Price</th>
                                <th className='bg-pink-200 border border-black'>Rating</th>
                                <th className='bg-pink-200 border border-black'>Quantity</th>
                                <th className='bg-pink-200 border border-black'>DesCription</th>
                                <th className='bg-pink-200 border border-black'>Update</th>
                                <th className='bg-pink-200 border border-black'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            

                            {
                                myToys.map((myToy, index) => <ShowMyToys
                                    handleDelete={handleDelete}
                                    key={index} myToy={myToy} index={index}
                                ></ShowMyToys>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;