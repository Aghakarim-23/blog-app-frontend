import Link from "next/link"

export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">

      <div className="bg-white max-w-md w-full p-6 rounded-md shadow-md">

        <h2 className="text-center text-2xl font-bold mb-2">Register</h2>

        <form className="flex flex-col gap-3  rounded-md">

          <div>
            <label htmlFor="username" className="block mb-1">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter your username" className="pl-2 rounded-md h-12 border border-gray-400 w-full "/>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="pl-2 rounded-md h-12 border border-gray-400 w-full "/>
          </div>

          <div> 
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="pl-2 rounded-md h-12 border border-gray-400 w-full "/>
          </div>

          <div className="my-3">
            <button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 transition active:bg-blue-700 h-12 text-white cursor-pointer">Register</button>
          </div>

        </form>

        

        <div className="text-center">
          <span>Already have an account ?</span>
          <Link href={"/login"} className="text-blue-600 hover:underline"> Log In</Link>
        </div>

      </div>

    </div>
  )
}

Register.getLayout = (page) => page