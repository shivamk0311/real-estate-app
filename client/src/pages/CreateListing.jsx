import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-center text-3xl font-semibold my-7'> Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type='text' id='name' required minLength={10} maxLength={100} placeholder='Name' className='rounded-lg bg-white  p-3' />
                <input type='textarea' id='description' required placeholder='Description' className='rounded-lg bg-white  p-3' />
                <input type='text' id='address' required placeholder='Address' className='rounded-lg bg-white  p-3' />
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5'/>
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='rent' className='w-5'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='parking' className='w-5'/>
                        <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='furnished' className='w-5'/>
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='offer' className='w-5'/>
                        <span>Offer</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-wrap items-center gap-6'>
                        <input type='number' id='bedrooms' min={1} required className='border-gray-300 bg-white p-3 w-13 rounded-lg' />
                        <p>Beds</p>
                        <input type='number' id='bathrooms' min={1} required className='border-gray-300 bg-white p-3 w-13 rounded-lg' />
                        <p>Baths</p>
                        <input type='number' id='regularPrice' min={1} required className='border-gray-300 bg-white p-3 w-13 rounded-lg' />
                        <div className='flex flex-col items-center'>
                            <p>Regular Price</p>
                            <span className='text-xs'>($ / month)</span>
                        </div>
                        
                        <input type='number' id='discountPrice' min={1} required className='border-gray-300 bg-white p-3 w-13 rounded-lg' />
                        <div className='flex flex-col items-center'>
                            <p>Discounted Price</p>
                            <span  className='text-xs'>($ / month)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal ml-2 text-gray-600'>The first image will be the cover (max 6)</span>
                </p>
                <div className='flex gap-4'>
                    <input id='images' type='file' className='p-3 border border-gray-300 w-full rounded-lg' accept='images/*' multiple/>
                    <button className='border border-green-700 rounded-lg text-green-700 p-3 uppercase font-semibold hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-amber-900 text-white uppercase rounded-lg hover:opacity-90 disabled:opacity-80 my-4' >Create Listing</button>

            </div>
        </form>

    </main>
  )
}
