import Link from 'next/link';
import React from 'react';

const Navbar = () => {
   const handler = () =>{
    router.path("/api/auth/signin")
   }
    

    return (
      <div className='flex items-center justify-between px-5 py-5 bg-blue-500 text-white'>
        <div>
            <h1 className='text-xl font-semibold'>C<span className='text-blue-200'>R</span >U<span className='text-blue-200'>D</span></h1>
        </div>
        <div className='flex space-x-3 text-sm'>
            <h6>Home</h6>
            <h6>Service</h6>
            <h6>Service</h6>
            <h6>Contact Us</h6>
        </div>
        <div className='text-xl px-3 py-2 bg-blue-400 rounded-md'>
            <button>Login</button>
        </div>
      </div>
    );
};

export default Navbar;
