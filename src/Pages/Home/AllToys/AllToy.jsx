import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({ toy, index }) => {
    // console.log(toy);
    const { _id, price, toyName, userName, subCategory, ratings, quantity } = toy;

    return (
        <tr>
            <td>{index + 1}</td>
            {/*  */}
            <td>{userName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/singleToys/${_id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
            </th>
        </tr>

    );
};

export default AllToy;