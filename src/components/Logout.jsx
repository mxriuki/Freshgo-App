import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div className="flex flex-col gap-4 text-center items-center  md:border-2 px-4 py-8 mt-48  rounded-md m-auto w-5/6 md:w-1/2">
        <h1 className="text-4xl font-bold">Logout</h1>
        <p className="text-center">You have been successfully logged out</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to='/'>Login</Link>
        </button>
    </div>
  );
}

export default Logout;