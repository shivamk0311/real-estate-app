import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingCard from '../components/ListingCard';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(saleListings)
  useEffect(() => {
    const fetchOffers = async () => {
      try{
        const res = await fetch(`/api/listing/get?offer=true&limit=3`);
        const data = await res.json();
        setOfferListings(data);
        fetchRents();
      }catch(error){
        console.log(error);
      }
    }

    const fetchRents = async () => {
      try{
        const res = await fetch(`/api/listing/get?type=rent&limit=3`);
        const data = await res.json();
        setRentListings(data);
        fetchSales();
      }catch(error){
        console.log(error);
      }
    }

    const fetchSales = async () => {
      try{
        const res = await fetch(`/api/listing/get?type=sale&limit=3`);
        const data = await res.json();
        setSaleListings(data);
      }catch(error){
        console.log(error);
      }
    }

    fetchOffers();
  },[]);
  return (
    <div>
      {/* {top} */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-amber-950 font-bold text-3xl lg:text-5xl'>Elite Estates — Where <span className='text-amber-800'>Exceptional</span> 
        <br/>
        Living Begins.</h1>
        <div className='text-amber-800 text-xs sm:text-sm'>
          Experience a curated collection of distinguished properties in <br/> the most desirable locations.
        </div>
        <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'> Get Started...
        </Link>
      </div>

      {/* {swiper} */}
      <Swiper navigation>
      {offerListings && offerListings.length>0 && offerListings.map((listing) => (
        <SwiperSlide>
          <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:"cover"}} className='h-[500px]' key={listing._id}></div>
        </SwiperSlide>
      ))}
      </Swiper>
      
      {/* {listings} */}

      <div className='max-w-5xl mx-auto p-3 flex flex-col gap-8 my-10'>
      {
        offerListings && offerListings.length>0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-amber-800'>Recent Offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                offerListings.map((listing) => (
                  <ListingCard key={listing._id} listing={listing}/>
                ))
              }
            </div>
          </div>
        )
      }
      {
        rentListings && rentListings.length>0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-amber-800'>Recent Rentals</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places to rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                rentListings.map((listing) => (
                  <ListingCard key={listing._id} listing={listing}/>
                ))
              }
            </div>
          </div>
        )
      }
      {
        saleListings && saleListings.length>0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-amber-800'>Recent Sales</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {
                saleListings.map((listing) => (
                  <ListingCard key={listing._id} listing={listing}/>
                ))
              }
            </div>
          </div>
        )
      }
      </div>


    </div>
  )
}
