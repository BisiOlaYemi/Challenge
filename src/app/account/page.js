'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationEvents } from '@/components/NavigationEvents';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (router) {
      router.push('/dashboard');
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
