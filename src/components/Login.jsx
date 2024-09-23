// src/Login.jsx
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle email/password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
      navigate('/home')
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      console.log(user);
      alert("Logged in successfully");
      navigate('/home')
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-10 transition-transform transform hover:scale-105 duration-300">
        <h1 className='text-4xl md:text-5xl font-bold text-center text-gray-600 mb-4'>Welcome Back</h1>
        <h2 className="font-semibold text-center text-2xl md:text-3xl mb-6 text-gray-600">Login to your account</h2>
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className="px-4 py-2 text-gray-700 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            className="px-4 py-2 text-gray-700 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <div className="flex gap-2 items-center justify-center">
            <button onClick={handleEmailLogin} className="w-full px-4 py-2 text-white bg-green-600 rounded-xl transition duration-200 hover:bg-green-700">
              Login
            </button>
            <button onClick={handleGoogleLogin} className="flex items-center justify-center px-4 py-2 text-gray-500 bg-gray-100 rounded-xl transition duration-200 hover:bg-gray-200">
              <GoogleIcon />
            </button>
          </div>
          <p className='text-center text-sm text-gray-600'>
            Do not have an account? 
            <Link to='/signup' className='text-blue-500 underline'> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
