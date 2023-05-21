
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const id = useLoaderData()
    console.log(id);
    const { userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = id;
    return (
        // <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
        //     <figure className="px-10 pt-10">
        //         <img src={image} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">Seller name : {userName}</h2>
        //         <p>Seller email: {postedBy}</p>
        //         <p>Price : {price}</p>
        //         <p>Toy name: {toyName}</p>
        //         <p>Description :{description}</p>
        //         <p>Quantity: {quantity}</p>
        //         <p>Ratings: {ratings}</p>
        //         {/* <div className="card-actions">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div> */}
        //     </div>
        // </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
 <figure className="px-10 pt-10">
                 <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
  <div className="card-body">
  <h2 className="card-title">Seller name:<span className='text-black text-xl ms-3'> {userName}</span></h2>
                <p className='font-bold'>Seller email:<span className='text-black text-xl ms-3'> {postedBy}</span></p>
                <p className='font-bold'>Price : <span className='text-black text-xl ms-3'>Price : {price}</span></p>
                <p className='font-bold'>Toy name: <span className='text-black text-xl ms-3'>Toy name: {toyName}</span></p>
            <p className='font-bold'>Description :<span className='text-black text-xl ms-3'>Description :{description}</span></p>
                <p className='font-bold'>Quantity: <span className='text-black text-xl ms-3'>Quantity: {quantity}</span></p>
                <p className='font-bold'>Ratings: <span className='text-black text-xl ms-3'>Ratings: {ratings}</span></p>
  
      <div className='flex gap-5'><Link to='/allToys'><button className="btn btn-primary">Back To ALL Toy</button></Link>
      <Link to='/'><button className="btn btn-secondary">Back To Home</button></Link></div>
    </div>
  </div>

    );
};



export default SingleToyDetails;