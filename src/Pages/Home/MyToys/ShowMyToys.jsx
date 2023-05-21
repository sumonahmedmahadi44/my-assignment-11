import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowMyToys = ({ myToy, index,handleDelete }) => {
    const { _id, userName, image, postedBy, quantity, description, price, toyName,  ratings } = myToy;
   
    return (
        <tr>

            <td className='border border-black'>{index + 1}</td>
            <td className='border border-black'>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>

                </div>
            </td>
            <td className='bg-pink-200 border border-black'>{toyName}</td>
            <td className='border border-black'>
                {userName}

            </td>
            
            <td className='bg-pink-200 border border-black'>{postedBy}</td>
            <td className='border border-black'>{price}</td>
            <td className='border border-black'>{ratings}</td>
            <td  className='bg-pink-200 border border-black'>{quantity}</td>
            <td className='border border-black'>
                {description}

            </td>
            <th className='border border-black'>
                <Link to={`/updatedToys/${_id}`}> <button className="btn bg-pink-200 text-black btn-xs">Update</button></Link>

            </th>
            <th className='border border-black'>
                <button onClick={() => handleDelete(_id)} className="btn bg-pink-200 text-black  btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;