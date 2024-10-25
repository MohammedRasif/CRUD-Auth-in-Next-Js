import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
           <Link href={"/"}> <button className='mx-[750px] mt-10 bg-blue-500 text-white px-3 py-2 '>Home</button></Link>
        </div>
    );
}

export default Page;
