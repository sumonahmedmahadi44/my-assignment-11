import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ExtraSection2 = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


    return (
        <div>
            <h1 className='mb-4 text-center font-extrabold text-4xl p-3 text-gray-500 border border-slate-900 border-spacing-2 bg-pink-200 rounded-2xl'>Suggestive Section !!!</h1>
            <section className="bg-pink-200 p-4 rounded my-24 py-8 hover:p-20 duration-300">
            <div className="container mx-auto">

                <div className='grid md:grid-cols-2 text-center'>
                    <div className='flex  flex-col justify-center text-left items-center mt-20'>
                        <h2 className="text-4xl font-bold text-black mb-4">  Welcome U and we are suggested to Add Your Toy <br /> your Toy. </h2>
                        <p className="text-emerald-500 text-xl font-extrabold">
                            We Assure U that ur Product will like our All Client <br /> Please visit OUr Shop Which is  <br /><span className='text-emerald-500'>
                                The one Of most Popular Toy Shop.
                            </span>
                        </p>
                        <div className='my-5 flex text-white  gap-5'>
                            <Link to='addToys'> <button className='btn bg-indigo-700
                             font-extrabold'>Please Add Toy</button></Link>
                            <Link to='addToys'> <button className='btn bg-emerald-200 font-extrabold'>See All Toys</button></Link>
                        </div>
                    </div>
                    <div  data-aos="zoom-in-right">
                        <img 
                            src="https://images.unsplash.com/photo-1520575839349-52ff2532d910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Illustration"
                            className="w-full rounded-full"
                            data-aos="zoom-in" // Apply zoom-in animation on scroll
                        />
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default ExtraSection2;