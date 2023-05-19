
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const id = useLoaderData()
    console.log(id);
    const { userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = id;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Seller name : {userName}</h2>
                <p>Seller email: {postedBy}</p>
                <p>Price : {price}</p>
                <p>Toy name: {toyName}</p>
                <p>Description :{description}</p>
                <p>Quantity: {quantity}</p>
                <p>Ratings: {ratings}</p>
                {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};



export default SingleToyDetails;