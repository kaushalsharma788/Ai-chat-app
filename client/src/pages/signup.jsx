import { Link } from "react-router-dom";

function Signup(){

return(

<div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex justify-center items-center">

<div className="bg-white w-[400px] rounded-2xl shadow-2xl p-8">

<h1 className="text-4xl font-bold text-center text-red-600">

Create Account

</h1>

<p className="text-center text-gray-500 mt-2">

Join ChatVerse AI

</p>

<div className="mt-8">

<input
type="text"
placeholder="Name"
className="w-full border p-3 rounded-lg mb-5 outline-none focus:border-red-600"
/>

<input
type="email"
placeholder="Email"
className="w-full border p-3 rounded-lg mb-5 outline-none focus:border-red-600"
/>

<input
type="password"
placeholder="Password"
className="w-full border p-3 rounded-lg mb-6 outline-none focus:border-red-600"
/>

<button
className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
>

Signup

</button>

</div>

<p className="text-center mt-6">

Already have an account?

<Link
to="/"
className="text-red-600 ml-2 font-semibold"
>

Login

</Link>

</p>

</div>

</div>

)

}

export default Signup;