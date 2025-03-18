"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const page = () => {
    const handleSignUp = async (event) =>{
      event.preventDefault();
      const newUser = {
        name:event.target.name.value,
        naemailme:event.target.email.value,
        password:event.target.password.value,
      };
      console.log(newUser)
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <Image src="/assets/images/login/login.svg" alt='Login' width={540} height={540}/>
          </div>
  
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='text-center text-4xl font-bold'>Sign Up</h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-black mb-2">Name</span>
                </label>
                <input
                  type="text"
                  name="name" 
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-black mb-2">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-black mb-2">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="w-full btn bg-[#FF3811] text-[#FFFFFF]"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
                <p className='text-center'>Or Sign Up with</p>
                <div className='flex justify-center items-center space-x-4 p-4'>
                <div className='bg-[#F5F5F8] rounded-full p-4'>
                <FaGoogle className='text-[#31AA52] '/>
                </div>
                <div className='bg-[#F5F5F8] rounded-full p-4'>
                  <FaGithub className='text-black '/>
                </div>
              
                </div>
            </div>
            <p className="text-center text-[#737373] my-5">
              Have an account?{" "}
              <Link href="login" className="text-[#FF3811]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default page;