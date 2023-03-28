import { AiOutlineCloseCircle } from 'react-icons/ai';

function Bookmarks() {
  return (
    <div className=" bg-gray-100 container">
      {/* <div className="mx-auto pt-12 px-4 sm:px-6 lg:px-8"> */}
      <header className=" sticky top-0 flex justify-between items-center p-4 border-b border-gray-300 bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
      </header>
        <ul className="p-4 mt-6">
          <li className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:flex sm:items-center sm:justify-between">
              <div className="text-sm font-medium text-gray-900 truncate">
                <a href="#" className="hover:underline">
                  Title of bookmark
                </a>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Remove bookmark</span>
                  <AiOutlineCloseCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
          {/* Add more bookmark items here */}
        </ul>
      {/* </div> */}
    </div>
  );
}


export default Bookmarks;
