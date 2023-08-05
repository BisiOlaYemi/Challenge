'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationEvents } from '@/components/NavigationEvents';
import supabase from '@/lib/Supabase';



const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error('Error creating user:', error);
      } else {
        console.log('User created successfully:', user);
        router.push('/account');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
      <div className=" w-full h-full md:h-screen flex flex-col justify-center items-center">
      <img
          src="https://img.freepik.com/free-photo/sign-up-register-online-internet-web-concept_53876-133557.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais"
          alt="challenge"
          className="h-screen"
        />
      </div>
      <div className="relative w-full h-full md:h-screen md:grid md:place-items-center">
        <div className="flex justify-center mt-2 mb-2">
          <div className="md:w-3/3 p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border text-gray-800 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address:
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border text-gray-800 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username:
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border text-gray-800 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="username"
                  id="username"
                  name="username"
                  placeholder="Enter a Username"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  className="w-full px-4 py-2 rounded-md border text-gray-800 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Email Address"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gray-800 text-white px-10 py-2 rounded-md hover:bg-violet-600"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavigationEvents />
    </div>
  );
};

export default Signup;
