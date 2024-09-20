// src/Login.jsx
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle email/password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      alert("Logged in successfully");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="h-1/2 w-full md:1/2 rounded-lg p-6 m-auto mt-24 flex flex-col items-center justify-center">
      <div className='w-full md:w-2/5 p-4 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-5xl text-gray-400 font-bold text-center'>Welcome Back</h1>
        <h2 className="font-bold text-center text-2xl md:text-3xl m-6">Login to your account</h2>
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-8 items-center justify-center w-full md:w-2/3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className="px-4 py-2 text-gray-400 border-2 border-blue-100 rounded-lg w-full"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            className="px-4 py-2 text-gray-400 border-2 border-blue-100 rounded-lg w-full"
          />
          <div className="flex gap-2 items-center justify-center">
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-xl">
              <Link to='/home'>Login</Link>
            </button>
            <button onClick={handleGoogleLogin} className="px-4 py-2 text-gray-500 bg-gray-100 rounded-xl">
              <Link to='/'>
                <GoogleIcon />
              </Link>
            </button>
          </div>
          <p className='text-center text-sm'>Do not have an account? <Link to='/signup' className='text-blue-500 underline'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
