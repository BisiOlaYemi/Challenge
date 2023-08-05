'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NavigationEvents } from '@/components/NavigationEvents';

const Signup = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (router) {
      router.push('/account');
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

export default Signup;
