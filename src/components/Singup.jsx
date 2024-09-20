// src/Signup.jsx
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Validate email and password
    if (!email || !password) {
      alert("Email and password fields cannot be empty");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully");
    } catch (error) {
      alert(`Account creation failed: ${error.message}`);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-10 transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mb-4 animate-fadeIn">Sign Up</h1>
        <form onSubmit={signup} className="flex flex-col gap-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            className='px-4 py-2 text-gray-700 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="px-4 py-2 text-gray-700 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            className="px-4 py-2 text-gray-700 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-xl transition duration-200 hover:bg-green-700"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account? 
            <Link to='/' className='text-blue-500 underline'> Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
