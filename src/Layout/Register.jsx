import { useState } from 'react';
import Twitter from '../assets/twitter-3.svg'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleSubmit} className='h-screen flex bg-gray-bg'> 
      <div className="w-full max-w-3xl m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <div className="mb-5">
          <img src={Twitter} alt="" className='w-14 mb-3 mx-auto'/>
          <h1 className='font-bold text-4xl mb-6'>Create an account</h1>
          <input htmlFor="name" type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div className="mb-5">
          <input htmlFor="email" type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="mb-5 mx-auto">
          <input htmlFor="password" type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit" className="flex w-full justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Register</button>
      </div>
    </form>
  );
};

export default Register;