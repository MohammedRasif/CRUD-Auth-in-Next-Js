import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
       <div className='mx-52'>
         <div className='flex justify-between  bg-blue-500 px-10 py-8 text-white text-xl font-semibold rounded-lg'>
            <h1>Tech Interpretations</h1>
            <Link href={'addCart'}><button className='px-3 py-2 bg-white text-black rounded-full hover:bg-slate-50'>Add Now</button>
            </Link>
        </div>
        <div className='mt-10 mb-5'>
            <h1 className='text-2xl font-semibold'>Everything</h1>
            <p className='font-semibold mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, id voluptas eligendi quod ipsum asperiores cupiditate doloribus alias aspernatur impedit saepe a commodi vero veritatis voluptates repellat exercitationem esse. Obcaecati?</p>
            <div className='flex space-x-2 justify-end mt-2'>
             <button className='bg-blue-500 text-white px-5 py-2 rounded-md'>Edit</button>
               <button className='bg-blue-500 text-white px-5 py-2 rounded-md'>Delete</button>
            </div>
        </div>
        <hr />
       </div>
    );
}

export default Header;
