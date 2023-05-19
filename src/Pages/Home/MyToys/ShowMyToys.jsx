import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowMyToys = ({ myToy, index,handleDelete }) => {
    const { _id, userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = myToy;
   
    return (
        <tr>

            <td>{index + 1}</td>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>

                </div>
            </td>
            <td>{toyName}</td>
            <td>
                {userName}

            </td>
            <td>{postedBy}</td>
            <td>{price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/updatedToys/${_id}`}> <button className="btn btn-ghost btn-xs">Update</button></Link>

            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;