import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home(){

return(

<div className="h-screen flex flex-col">

<Navbar/>

<div className="flex flex-1 overflow-hidden">

<Sidebar/>

<div className="flex-1 bg-gradient-to-br from-gray-50 to-red-50 flex justify-center items-center">

<div className="text-center">

<h1 className="text-5xl font-bold text-red-600">

💬

</h1>

<h2 className="text-3xl font-bold mt-5">

Welcome to ChatVerse AI

</h2>

<p className="mt-4 text-gray-500">

Select any user to start chatting.

</p>

</div>

</div>

</div>

</div>

)

}

export default Home;