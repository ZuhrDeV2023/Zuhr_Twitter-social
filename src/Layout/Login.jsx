import { useState } from 'react';
import { Link } from 'react-router-dom';
import Twitter from "../assets/twitter-3.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = '/home';
  };

  return (
    <form onSubmit={handleSubmit} className="h-screen flex bg-gray-bg">
      <div className="w-full max-w-3xl m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <div>
          <img src={Twitter} alt="" className='w-14 mb-4'/>
          <h1 className='font-bold text-3xl mb-6'>Log in to Twitter</h1>
          <input htmlFor="email" type="email" id="email" placeholder="Email address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="mb-6 mx-auto">
          <input htmlFor="password" type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit" className="flex w-full justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Login In</button>
        <div className='flex justify-between'>
        <button className='mt-6 text-[#1DA1F2]'>Forgot password?</button>
        <Link className='mt-6 text-[#1DA1F2]' to="/register">Sign up to Twitter</Link>
        </div>
      </div>      
    </form>
  );
};

export default Login;