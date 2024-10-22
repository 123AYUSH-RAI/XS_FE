import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../react-query/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { Spin } from "antd";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { setUserInfo } from "../../utils/localStorage";

// Toggle theme function
const toggleTheme = (isChecked) => {
  const html = document.documentElement;
  if (isChecked) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

function Login() {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = React.useState(savedTheme === 'dark');

  const onSubmit = async (data) => {
    setLoading(true);
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setLoading(false);
      setUserInfo(data.token);
      toast.success("Successfully logged in");
      data.role === "Admin" ? navigate("/admin") : navigate("/");
    },
    onError: (error) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      setLoading(false);
    },
  });

  const handleThemeToggle = (e) => {
    const isChecked = e.target.checked;
    setIsDarkTheme(isChecked);
    toggleTheme(isChecked);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-xl shadow-2xl border overflow-hidden max-w-md lg:max-w-4xl w-full">
        {/* Left side (image) */}
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-center transform transition-transform duration-500 hover:scale-105 hover:brightness-110 hover:blur-sm hover:shadow-lg rounded-tl-xl rounded-bl-xl"
          style={{
            backgroundImage: `url(https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundPosition: 'center',
          }}
        ></div>
    
        {/* Right side (form) */}
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-2xl font-semibold text-gray-700 text-center">Welcome back!</p>

          {/* Toggle Theme Switch with Labels */}
          <div className="absolute top-4 right-4 flex items-center">
            <span className={`mr-2 text-gray-700 ${isDarkTheme ? 'font-bold' : ''}`}>Light Mode</span>
            <label htmlFor="theme-toggle" className="cursor-pointer flex items-center">
              <input
                id="theme-toggle"
                type="checkbox"
                checked={isDarkTheme} // Reflect the current theme state
                onChange={handleThemeToggle}
                className="hidden"
              />
              <div className="relative">
                <div className={`block w-14 h-8 rounded-full transition duration-300 ${isDarkTheme ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div
                  className={`dot absolute top-1 left-1 transition-transform duration-300 ${isDarkTheme ? 'translate-x-6 bg-white' : 'bg-white'} w-6 h-6 rounded-full`}
                ></div>
              </div>
            </label>
            <span className={`ml-2 text-gray-700 ${!isDarkTheme ? 'font-bold' : ''}`}>Dark Mode</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Email Input */}
            <div className="relative">
              <label className="text-gray-600 font-medium">Email</label>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.94 5H17.06A2.94 2.94 0 0119 7.94v4.12A2.94 2.94 0 0117.06 15H2.94A2.94 2.94 0 010 12.06V7.94A2.94 2.94 0 012.94 5zM2 7.94c0-.518.42-.94.94-.94h14.12c.518 0 .94.42.94.94v.618l-7.06 4.236a1 1 0 01-1.061 0L2 8.558V7.94zM18 12.06a.94.94 0 00-.94.94V7.94h-14.12v4.12c0 .518.42.94.94.94H17.06a.94.94 0 00.94-.94V12.06z" />
                </svg>
                <input
                  type="email"
                  {...register("userId")}
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
    
            {/* Password Input */}
            <div className="relative">
              <label className="text-gray-600 font-medium">Password</label>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a4 4 0 014 4v1h1a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h1V6a4 4 0 014-4zm1 6V6a3 3 0 00-6 0v2h6zm-2 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                <input
                  type="password"
                  {...register("password")}
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                  placeholder="Enter your password"
                />
              </div>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2 block">
                Forgot Password?
              </a>
            </div>
    
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-full hover:bg-blue-900 shadow-lg transition duration-800"
              >
                {loading ? <Spin pinning={loading} /> : "Login"}
              </button>
            </div>
          </form>
    
         
    
          {/* Sign-Up Link */}
          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-gray-500">
              Don&apos;t have an account yet?{" "}
              <span
                className="text-blue-700 hover:text-blue-600 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
