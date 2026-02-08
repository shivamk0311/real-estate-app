import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <header className='bg-amber-50 shadow-md'>
        <div className='flex justify-between items-center p-3 mx-auto max-w-7xl' >
            <Link to = '/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-amber-800'>Elite</span>
                    <span className='text-amber-950'>Estates</span>
                </h1>
            </Link>
            <form className='bg-white rounded-b-lg p-3 flex items-center'>
                <input type='text' placeholder='Search...' className='text-amber-600 focus:outline-0 w-24 sm:w-64 rounded-lg' />
                <FaSearch className='text-amber-900'/>
            </form>
            <ul className='flex gap-4 text-amber-950'>
                <Link to='/'>
                    <li className='hidden  sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden  sm:inline hover:underline'>About</li>
                </Link>
                <Link to='/profile'>
                {currentUser ? 
                    (<img className = 'rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt = 'profile' />)
                :
                 (<li className='hover:underline'>Sign In</li>)
                }
                </Link>                
            </ul>
        </div>
    </header>
  )
}
