import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="h-16 bg-gradient-to-r from-red-700 via-red-600 to-red-500 flex items-center justify-between px-8 shadow-xl">

      <div>

        <h1 className="text-white text-2xl font-bold tracking-wide">

          🔥 ChatVerse AI

        </h1>

      </div>

      <div className="flex gap-6 items-center">

        <button className="text-white hover:scale-110 transition">

          <FaBell size={20} />

        </button>

        <button className="text-white hover:scale-110 transition">

          <FaUserCircle size={30} />

        </button>

      </div>

    </nav>
  );
}

export default Navbar;