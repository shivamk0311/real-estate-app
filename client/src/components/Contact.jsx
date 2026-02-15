import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiFetch } from '../../utils/api';

export default function Contact({listing}) {
   
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState(' ');

  useEffect(() => {
    const fetchLandlord = async () => {
        try{
            const res = await apiFetch(`/api/user/${listing.userRef}`);
            const data = await res.json();
            setLandlord(data);
        }catch(error){
            console.log(error);
        }
    }
    fetchLandlord();
  }, [listing.userRef])

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div>
        {landlord && (
            <div className='flex flex-col gap-2'>
                <p>Contact <span className='font-semibold'>{landlord.username} </span> 
                for <span className='font-semibold'>{listing.name} </span>:</p>
                <textarea name='message' id='message' rows="2" placeholder='Enter your message here...' value={message}
                    onChange={handleChange}
                    className='w-full bg-white shadow-md p-3 rounded-lg '></textarea>
                <Link
                to={`mailto: ${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
                className='text-white bg-amber-950 p-3 rounded-lg uppercase text-center hover:opacity-85'> Send Message</Link>
            </div>
        )}
    </div>
  )
}
