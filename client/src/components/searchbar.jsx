import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="p-4">

      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">

        <FaSearch className="text-gray-400"/>

        <input
          type="text"
          placeholder="Search users..."
          className="ml-3 w-full bg-transparent outline-none"
        />

      </div>

    </div>
  );
}

export default SearchBar;