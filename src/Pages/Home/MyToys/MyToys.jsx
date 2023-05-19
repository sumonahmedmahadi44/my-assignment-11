import React, { useContext, useEffect, useState } from 'react';
import ShowMyToys from './ShowMyToys';
import { AuthContext } from '../../../Provider/AuthProvider';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setToys] = useState([]);
    const [loadedUser, setUser] = useState(myToys)
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/post-toys/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = loadedUser.filter(users => users._id !== _id)
                console.log(remaining);
                setUser(remaining);
            })
    }
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-center text-4xl font-bold  text-orange-400">My Toys {myToys.length}</h2>


                <div className="overflow-x-auto mt-8  w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn btn-sm btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <th>Toy Photo</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Seller email</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                myToys.map((myToyTable, idx) => <MyToyTable
                                    myToyTable={myToyTable}
                                    idx={idx}
                                ></MyToyTable>)
                            } */}

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