import Search from "./Search/page"
import AddNew from "../addNew/page"
export default async function HEADER() {
    return (<header className="bg-gray-50">
    <div className="mx-auto flex flex-col align-items-center md:flex-row justify-center md:justify-between max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

        
  
        
  
  

      <div className="m-auto flex justify-center flex-col">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome to Sperch!</h1>
  
        <p className="mt-1.5 text-sm my-4 text-gray-500">
          Find Startups that Rock. Keep it up! 🚀
        </p>
        <AddNew/>
      </div>
      <div className="flex my-4 mx-auto flex-col justify-center align-items-center m-auto ">

<Search/>
  
        </div>
    </div>
  </header>)
}