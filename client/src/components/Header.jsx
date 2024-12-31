import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className='bg-fuchsia-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Rosalia</span>
            <span className='text-slate-700'>Estates</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type='text' placeholder='Search' className=' bg-transparent p-3 rounded-lg focus:outline-none w-24 sm:w-64'></input>
            {/*<FaSearch className="text-slate-500"></FaSearch>*/}
        </form>
        <ul className="flex gap-4">
          <Link to='/Home'>
          <li className="hidden sm:inline text-purple-600 hover:underline">Home</li>
          </Link>
          <Link to='/About'>
          <li className="hidden sm:inline text-purple-600 hover:underline">About</li>
          </Link>
          <Link to='/Sign-in'>
          <li className=" text-purple-600 hover:underline">Sign-in</li>
          </Link>
        </ul>
        </div>
    </header>
  )
}
