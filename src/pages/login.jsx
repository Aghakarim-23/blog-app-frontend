import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [ showPassword, setShowPassword ] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <div className="bg-white max-w-md w-full p-6 rounded-md shadow-md">
        <h2 className="text-center text-2xl font-bold mb-2">Login</h2>

        <form
          className="flex flex-col gap-3  rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              className="pl-2 rounded-md h-12 border border-gray-400 w-full focus:ring-1 focus:border-blue-500 focus:ring-blue-500 outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              className="pl-2 rounded-md h-12 border border-gray-400 w-full focus:ring-1 focus:border-blue-500 focus:ring-blue-500 outline-none"
              required
              onChange={handleChange}
            />
            <button type="button" className="absolute top-11 right-3 text-gray-500 cursor-pointer hover:text-gray-600 transition"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <FiEye/> : <FiEyeOff/> }
            </button>
          </div>

          <div className="my-3">
            <button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 transition active:bg-blue-700 h-12 text-white cursor-pointer">
              Login
            </button>
          </div>
        </form>

        <div className="text-center">
          <span>Don't have an account ?</span>
          <Link href={"/register"} className="text-blue-600 hover:underline">
            {" "}
            Register
          </Link>
        </div>

        <div className="text-center mt-3">
          <Link
            href={"/forgot-password"}
            className="text-blue-600 hover:underline"
          >
            {" "}
            Forgot password ?
          </Link>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = (page) => page;
