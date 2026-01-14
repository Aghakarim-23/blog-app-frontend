import Link from "next/link"

export default function Login() {
  return (
     <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">

      <div className="bg-white max-w-md w-full p-6 rounded-md shadow-md">

        <h2 className="text-center text-2xl font-bold mb-2">Login</h2>

        <form className="flex flex-col gap-3  rounded-md">

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="pl-2 rounded-md h-12 border border-gray-400 w-full "/>
          </div>

          <div> 
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="pl-2 rounded-md h-12 border border-gray-400 w-full "/>
          </div>

          <div className="my-3">
            <button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 transition active:bg-blue-700 h-12 text-white cursor-pointer">Login</button>
          </div>

        </form>

        

        <div className="text-center">
          <span>Don't have an account ?</span>
          <Link href={"/register"} className="text-blue-600 hover:underline"> Register</Link>
        </div>

        <div className="text-center mt-3">
          <Link href={"/forgot-password"} className="text-blue-600 hover:underline"> Forgot password ?</Link>
        </div>

      </div>

    </div>
  )
}

Login.getLayout = (page) => page