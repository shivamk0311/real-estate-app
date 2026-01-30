import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../firebase";
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserSuccess, signOutUserStart } from "../redux/user/userSlice.js";
import { Link } from "react-router-dom";

export default function Profile() {
  const {currentUser, loading, error} = useSelector(state => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [percent, setPercent] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file){
      handleImageUpload(file);
    }
  },[file]);

  const handleImageUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.round(progress));
      },
      (error) => {
      setFileUploadError(true);
      },
      () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then((downloadURL) => setFormData({...formData, avatar: downloadURL}))
      },
    );

  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
      if(data.success === false){
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    }catch(error){
      dispatch(updateUserFailure(error.message));
    }
  }

  const handleDelete = async () => {
    try{
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, 
      {
        method: 'DELETE'
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    }catch(error){
      dispatch(deleteUserFailure(error.message));
    }
  }

  const handleSignOut = async () => {
    try{
      signOutUserStart();
      const res = await fetch('/api/auth/signout');
      const data = res.json();
      if (data.success === false){
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    }catch(error){
      dispatch(signOutUserFailure(error.message));
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold mt-7 text-center'>Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*"></input>
        <img onClick={() => fileRef.current.click()} className='object-cover rounded-full h-24 w-24 mt-5 self-center cursor-pointer' src={ formData.avatar || currentUser.avatar} alt='profile_img'></img>
        <p className="text-sm self-center">
          {fileUploadError ? 
          <span className="text-red-700"> Error uploading image!</span> :
          percent > 0 && percent <100 ?
          <span className="text-amber-950">{`Uploading ${percent}%...`}</span> :
          percent === 100 ? 
          <span className="text-green-700"> Image uploaded successfully!!</span> :
          ""
          }
        </p>
        <input type="text" placeholder="Username" defaultValue={currentUser.username} id="username" className="bg-white rounded-lg p-3 " onChange={handleChange}></input>
        <input type="text" placeholder="Email" defaultValue={currentUser.email} id="email" className="bg-white rounded-lg p-3 " onChange={handleChange}></input>
        <input type="password" placeholder="Password" id="password" className="bg-white rounded-lg p-3 " onChange={handleChange}></input>
        <button disabled={loading} className="bg-amber-950 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">{loading ? 'Loading...' : 'Update'}</button>
        <Link className='bg-green-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-90' to='/create-listing'>Create Listing</Link>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDelete} className="text-red-700 cursor-pointer">Delete Account</span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      <p className="text-red-700 mt-5 text-center">{error ? error : ''}</p>
      <p className="text-green-700 mt-5 text-center">{updateSuccess ? 'User updated successfully!' : ''}</p>
    </div>
  )
}
