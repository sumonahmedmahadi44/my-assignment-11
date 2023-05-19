import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddToys.css'
import { AuthContext } from '../../../Provider/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        fetch("http://localhost:5000/post-toys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);
    };
    return (
        <div className="add-job-container mt-52">
            <div className="add-job row">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}

                        {/* <div>
                            <label>
                                <input
                                    className="text-input"
                                    {...register("fg", { required: true })}
                                    placeholder="salary"
                                    defaultValue="30k"
                                />
                            </label>
                        </div> */}

                        <input
                            className="text-input"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="text-input  input input-bordered" {...register("subCategory")}>
                                <option value="Engineering">engineering</option>
                                <option value="Editor">Editor</option>
                                <option value="writer">Writer</option>
                            </select>
                        </div>


                        <input
                            className="text-input"
                            {...register("toyName")}
                            placeholder="Toy name"
                            type="name"
                        />
                        <input
                            className="text-input"
                            {...register("price")}
                            placeholder="Toy Price"
                            type="number"
                        />
                        <input
                            className="text-input"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            type="email"
                        />
                        <input 
                            className="text-input"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            type="name"
                        />

                        <input
                            className="text-input"
                            {...register("description")}
                            placeholder="description"
                        />
                        <input
                            className="text-input"
                            {...register("quantity")}
                            placeholder="Available Quantity"
                        />
                        <input
                            className="text-input"
                            {...register("ratings")}
                            placeholder="Ratings"
                        />

                        <input className="submit-btn" value="Add Toys" type="submit" />
                    </form>
                </div>
                {/* <div className="col-md-4">
                    <img
                        className="w-100"
                        src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
                        alt=""
                    />
                </div> */}
            </div>
        </div>
    );
};

export default AddToys;