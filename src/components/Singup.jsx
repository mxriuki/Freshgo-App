import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';
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
      // Provide more detailed error messages
      alert(`Account creation failed: ${error.message}`);
    }
  }

  return (
    <div className="h-1/2 w-full md:1/2 p-6 m-auto mt-28 flex flex-col items-center justify-center">
      <div className="w-full md:w-2/5 rounded-tr-3xl p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center m-3">Sign Up</h1>
        <form onSubmit={signup} className="flex flex-col gap-8 items-center justify-center w-full md:w-2/3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            className='px-4 py-2 text-gray-400 border-2 border-blue-100 rounded-lg w-full'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="px-4 py-2 text-gray-400 border-2 border-blue-100 rounded-lg w-full"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            className="px-4 py-2 text-gray-400 border-2 border-blue-100 rounded-lg w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-xl"
          >
            Sign Up
          </button>
          <p className="text-center text-sm">
            Already have an account? <Link to='/' className='text-blue-500 underline'>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
