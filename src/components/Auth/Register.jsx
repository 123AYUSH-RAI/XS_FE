import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register as signup } from '../../react-query/api/auth';
import { toast } from 'react-toastify';
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
const [loading  ,setLoading] = useState(false)
const navigate = useNavigate()
  const onSubmit= async (data) => {
    setLoading(true)
    mutation.mutate(data)
  }
  const mutation = useMutation({ mutationFn: signup,   
    onSuccess: (data, variables, context) => {
          setLoading(false)
          console.log("regitered")
    toast.success("Successfully Register")
      navigate("/login")
    },
    onError: (error, variables, context) => {
 console.log(error.response.data.message)
 toast.error(error.response.data.message)
    },
    onSettled: (data, error, variables, context) => {
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

    {/* Name Input */}
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        {...register("name", { required: "Name is required" })}
        className="mt-1 block w-full text-gray-800 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address"
          }
        })}
        className="mt-1 block w-full text-gray-800 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>

    {/* Contact Input */}
    <div className="mb-4">
      <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
      <input 
        type="text" 
        id="contact" 
        name="contact" 
        {...register("contact", { required: "Contact is required" })}
        className="mt-1 block w-full px-4 text-gray-800 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
    </div>

    {/* City Input */}
    <div className="mb-4">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
      <input 
        type="text" 
        id="city" 
        name="city" 
        {...register("city", { required: "City is required" })}
        className="mt-1 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
    </div>

    {/* Password Input */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        {...register("password", { required: "Password is required" })}
        className="mt-1 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Sign Up
    </button>
  </form>
</div>

  );
};

export default Register;
