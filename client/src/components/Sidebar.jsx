import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

function Sidebar() {

const users=[

{name:"Rahul",online:true},

{name:"Aman",online:false},

{name:"Priya",online:true},

{name:"Rohit",online:true},

{name:"Anjali",online:false},

{name:"Vikas",online:true}

]

return(

<div className="w-80 bg-gray-50 border-r overflow-y-auto">

<SearchBar/>

{

users.map((user,index)=>(

<UserCard

key={index}

name={user.name}

online={user.online}

/>

))

}

</div>

)

}

export default Sidebar;