'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationEvents } from '@/components/NavigationEvents';
import supabase from '@/lib/Supabase';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  console.log(formData.username, formData.password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData.username, formData.password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from('users')
        .select()
        .eq('username', formData.username) 
        .eq('password', formData.password) 
        .single();

        if (error) {
          console.error('Error logging in:', error);
        } else if (!data) {
          console.log('Invalid credentials');
        } else {
          window.alert('Logged in successfully!');
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
      <div className=" w-full h-full md:h-screen flex flex-col justify-center items-center">
        <img
          src="https://media.istockphoto.com/id/482713673/photo/login.webp?b=1&s=170667a&w=0&k=20&c=F1bt-wQ2UaHgTs2ZBrAHaLws3ZXijev26ATRnF4Fvug="
          alt="challenge"
          className="h-screen"
        />
      </div>
      <div className="relative w-full h-full md:h-screen md:grid md:place-items-center">
        <div className="flex justify-center mt-2 mb-2">
          <div className="md:w-2/3 p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username:
                </label>
                <input
                  className="w-full px-10 py-2 rounded-md border text-gray-800 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  className="w-full px-10 py-2 rounded-md border text-gray-800  border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange} 
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gray-800 text-white px-10 py-2 rounded-md hover:bg-violet-600"
                  type="submit"
                >
                  Login
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

export default LoginForm;
