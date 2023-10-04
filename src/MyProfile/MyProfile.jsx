import React from 'react'

const MyProfile = () => {
    return (
        <>
        <div className='bg-[url("https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001__340.png")] h-96 w-full bg-cover bg-center p-20'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-2 text-4xl font-bold text-center">
                    Hero section with background image
                </h1>
                <p className="text-lg text-center text-white">
                    This isLorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                </p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Get started
                    </button>
                </div>
            </div>
        </div >
      </>
    )
}

export default MyProfile
