function UserCard({ name, online }) {

return(

<div
className="mx-3 mb-3 bg-white rounded-2xl p-4 cursor-pointer shadow hover:shadow-xl hover:bg-red-50 transition duration-300 flex justify-between items-center">

<div className="flex items-center gap-4">

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex justify-center items-center text-white font-bold text-xl">

{name.charAt(0)}

</div>

<div>

<h2 className="font-semibold text-gray-800">

{name}

</h2>

<p className="text-sm text-gray-500">

{online?"Online":"Offline"}

</p>

</div>

</div>

<div
className={`w-4 h-4 rounded-full ${
online
?"bg-green-500"
:"bg-gray-400"
}`}
/>

</div>

)

}

export default UserCard;