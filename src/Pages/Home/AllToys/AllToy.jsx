import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({ toy, index }) => {
    // console.log(toy);
    const { _id, price, toyName, userName, subcategory,  quantity } = toy;

    return (
        <tr>
            <td className='border border-black'>{index + 1}</td>
            {/*  */}
            <td className='bg-pink-200 border border-black'>{userName}</td>
            <td className='border border-black'>{toyName}</td>
            <td className='bg-pink-200 border border-black'>{subcategory}</td>
            <td className='border border-black'>{price}</td>
            <td className='bg-pink-200 border border-black'>{quantity}</td>
            <th className='border border-black'>
                <Link  to={`/singleToys/${_id}`}> <button className=' btn btn-xs btn-primary'>View Details</button></Link>
            </th>
        </tr>

    );
};

export default AllToy;