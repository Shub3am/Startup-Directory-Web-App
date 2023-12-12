import Search from "./Search/page"
import AddNew from "../addNew/page"
export default async function HEADER() {
    return (<header className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-4">
<Search/>
  
          <a
            href="#"
            className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
  
          </a>
        </div>
  
        <span aria-hidden="true" className="block h-6 w-px rounded-full bg-gray-200"></span>
  
  
      </div>
  
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome to Sperch!</h1>
  
        <p className="mt-1.5 text-sm text-gray-500">
          Find Startups that Rock. Keep it up! 🚀
        </p>
        <AddNew/>
      </div>
    </div>
  </header>)
}