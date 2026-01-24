import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  
  
  const handleSubmit = async (e) => {

    try{
      e.preventDefault();
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        setLoading(false);
        setError(data.message || 'Something went wrong!');
        return;
      }
      setLoading(false); 
      console.log(data);
      setError(null);
      navigate('/sign-in');
    }catch(error){
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up </h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border rounded-lg p-3 bg-white' id='username' onChange={handleChange}/>
        <input type='text' placeholder='Email' className='border rounded-lg p-3 bg-white' id='email' onChange={handleChange}/>
        <input type='password' placeholder='Password' className='border rounded-lg p-3 bg-white' id='password' onChange={handleChange}/>
        <button disabled = {loading} className='bg-amber-950 text-white uppercase p-3 rounded-lg hover:opacity-85 disabled:opacity-65'> {loading ? 'Loading...' : 'Sign Up'}</button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      
    </div>
  );
}
