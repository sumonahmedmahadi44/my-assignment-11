
import React, { useContext } from 'react';
import Swal from "sweetalert2";
import { Navigate, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import SetTitle from '../../../Hooks/SetTitle';

const UpdatedToys = () => {
    SetTitle('updateToys')
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const toys = useLoaderData();
    console.log(toys);
    // const { _id, userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = toys;
    const onSubmit = (data) => {
        

        fetch(`https://unique-car-toys-server.vercel.app/post-toys/${toys._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if(result.modifiedCount){
                    Swal.fire({
                      title: 'success!',
                      text: 'coffee updated successfully',
                      icon: 'success',
                      confirmButtonTxt: 'Cool'
                    })
                    
                  }
                 
            });
        // console.log(data);
    };
    return (
        <div className="p-5 h-full flex justify-center items-center gap-10 mt-10">
            <div className="h-full">
                <div className="col-md-8">
                    <form className='md:p-20  w-full border border-black h-full' onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}


                       <div className='text-center'> <span className="font-bold text-xl">Image :</span> <input
                            className=" border border-black p-2 bg-pink-200 "
                            {...register("image")}
                            placeholder="image link"
                            defaultValue = {toys.image}
                            // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                            type="url"
                            
                        /></div>

                        <div className="form-control">

                            <label className="label">
                                <span className="font-bold text-xl">Sub category</span>
                            </label>
                            <select className="border border-black p-2 bg-pink-200" {...register("subcategory")}>
                                <option value="Engineering">Sports Car</option>
                                <option value="Editor">Friction Cars</option>
                                <option value="writer">Remote Control Cars</option>
                            </select>
                        </div>


                        <div className='md:flex justify-around items-center'><div><span className="font-bold text-xl">Toy Name :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("toyName")}
                            placeholder="Toy name"
                            defaultValue = {toys.toyName}
                            type="name"
                        /></div>
                       <div><span className="font-bold text-xl">Toy Price :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("price")}
                            placeholder="Toy Price"
                            defaultValue = {toys.price}
                            type="number"
                        /></div></div>
                        <div className='md:flex justify-around items-center'>
                        <div><span className="font-bold text-xl">Email :</span><input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            defaultValue = {toys.postedBy}
                            type="email"
                        /></div>
                        <div><span className="font-bold text-xl">DisplayName :</span><input 
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            defaultValue = {toys.userName}
                            type="name"
                        /></div>
                        </div>

                        <div className='md:flex justify-around items-center'>
                            <div>
                            <span className="font-bold text-xl">Quantity :</span><input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("quantity")}
                            placeholder="Available Quantity"
                            defaultValue = {toys.quantity}
                        /></div>
                        <div>
                        <span className="font-bold text-xl">Ratings :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("ratings")}
                            placeholder="Ratings"
                            defaultValue = {toys.ratings}
                        />
                        </div>
                        </div>

                        <div>
                        <span className="font-bold text-xl">Description :</span> <input
                            className="border w-full mb-4 border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("description")}
                            placeholder="description"
                            defaultValue = {toys.description}
                        />
                        </div>
                        <div className='text-center'>
                        <input className="btn w-32 bg-amber-400 text-black p-2 " value="Update Toys" type="submit" />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default UpdatedToys;
