import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    
    try{
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = signInWithPopup(auth, provider);
        
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({name: (await result).user.displayName, email: (await result).user.email, photo: (await result).user.photoURL}),
        })
        const data = await res.json();
        dispatch(signInSuccess(data));
        navigate('/');
    }catch(error){
        console.log("Google SignIn Failed!. ",error)
    }
  }

  return (
    <button type='button' onClick={handleGoogleClick} 
    className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-90'>Continue with Google</button>
  )
}
