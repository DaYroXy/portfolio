import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex min-h-screen flex-col px-4 gap-4 bg-[#121212] items-center justify-center'>
            <h1 className='text-4xl md:text-6xl text-white'>Where are you going?</h1>
            <h2 className='text-2xl text-white'>404 - Not Found</h2>
            <Link href="/" className="min-w-[250px] px-4 text-center py-2 w-full rounded-full sm:w-fit text-xl hover:bg-slate-200 bg-gradient-to-br from-yellow-500 via-red-500 to-orange-500 text-white">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound