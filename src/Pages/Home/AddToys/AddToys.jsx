import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        fetch("https://unique-car-toys-server.vercel.app/post-toys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if(result.insertedId){
                    Swal.fire({
                      title: 'success!',
                      text: 'coffee Added successfully',
                      icon: 'success',
                      confirmButtonTxt: 'Cool'
                    })
                    
                  }
            });
        console.log(data);
    };
    return (
        <div className="p-4 h-full flex justify-center items-center gap-10 mt-10">
            <div className="h-full">
                <div className="col-md-8">
                    <form className='md:p-20  w-full border border-black h-full' onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}


                       <div className='text-center'> <span className="font-bold text-xl">Image :</span> <input
                            className=" border border-black p-2 bg-pink-200 "
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            
                        /></div>

                        <div className="form-control">

                            <label className="label">
                                <span className="font-bold text-xl">Sub category</span>
                            </label>
                            <select className="text-input  input input-bordered" {...register("subCategory")}>
                                <option value="sportsCar">Sports car</option>
                                <option value="offRoadCar">Off Road Car</option>
                                <option value="remoteCar">Remote Car</option>
                            </select>
                        </div>


                        <div className='md:flex justify-around items-center'><div><span className="font-bold text-xl">Toy Name :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("toyName")}
                            placeholder="Toy name"
                            type="name"
                        /></div>
                       <div><span className="font-bold text-xl">Toy Price :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("price")}
                            placeholder="Toy Price"
                            type="number"
                        /></div></div>
                        <div className='md:flex justify-around items-center'>
                        <div><span className="font-bold text-xl">Email :</span><input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            type="email"
                        /></div>
                        <div><span className="font-bold text-xl">DisplayName :</span><input 
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            type="name"
                        /></div>
                        </div>

                        <div className='md:flex justify-around items-center'>
                            <div>
                            <span className="font-bold text-xl">Quantity :</span><input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("quantity")}
                            placeholder="Available Quantity"
                        /></div>
                        <div>
                        <span className="font-bold text-xl">Ratings :</span> <input
                            className="border border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("ratings")}
                            placeholder="Ratings"
                        />
                        </div>
                        </div>

                        <div>
                        <span className="font-bold text-xl">Description :</span> <input
                            className="border w-full mb-4 border-black p-2 bg-pink-200 mt-4 me-4"
                            {...register("description")}
                            placeholder="description"
                        />
                        </div>
                        <div className='text-center'>
                        <input className="btn w-32 bg-amber-400 text-black p-2 " value="Add Toys" type="submit" />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default AddToys;