'use client'
 import { useSearchParams, useRouter } from "next/navigation"


export default function Pagination() {
    let searchParams = useSearchParams()
    let pageNo: number | undefined = searchParams.get('page')
    let Router = useRouter()

    return (<div><button onClick={()=> {
        Router.push("/")
    }} className="relative mx-2">
    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black">Home</span>
</button><button onClick={()=> {
        if (pageNo && pageNo > 0) {
            Router.push(`?page=${Number(pageNo)-1}`)
        }
    }} className="relative mx-2">
    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black">Prev</span>
</button>
  <button onClick={()=> {
        if (pageNo) {
            Router.push(`?page=${Number(pageNo)+1}`)
        } else { Router.push("?page=1")}
    }} className="relative">
    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black">Next</span>
</button>
</div>)
}

