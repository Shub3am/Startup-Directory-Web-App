'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Search() {
    let path = usePathname()
    let Router = useRouter()
    
    function handleQuery(query) {
        (query && query.length) ? Router.replace(`${path}?search=${query}`) : Router.replace(path)
    }
    return           <div className="relative">
    <label className="sr-only" htmlFor="search"> Search </label>

    <input
      className="h-10 w-full rounded-full border-none bg-white text-black border-black border-1 pe-10 ps-4 text-sm shadow-sm sm:w-56"
      id="search"
      type="search"
      onKeyUp={(evt)=>handleQuery(evt.target.value)}
      onChange={(evt)=>handleQuery(evt.target.value)}
      placeholder="Search Startups..."
    />

  </div>
}