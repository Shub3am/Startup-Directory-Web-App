"use client"
import { useState } from "react";

function PopupModal({setOpen}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [funding, setFunding] = useState("")
    const [industry, setIndustry] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState(false)
    const [investor, setInvestor] = useState("")



    return <div className="absolute h-screen "><div className="py-12 bg-opacity-50 backdrop-blur-lg transition duration-150 ease-in-out z-10 top-0 fixed right-0 bottom-0 left-0" id="modal">
    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
        {error ? <h1 className="text-red-800 font-lg font-bold tracking-normal leading-tight mb-4">{error}</h1> : null}
<form>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add New Startup</h1>
            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Startup Name:</label>
            <input onChange={(evt)=> setName(evt.target.value)} id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Voxel" required />
            
            <label htmlFor="foundingDate" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Founding Date</label>
            <div className="relative mb-5 mt-2">
                <input onChange={(evt)=> setDate(evt.target.value)} id="foundingDate" type="date" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="DD/MM/YY" required/>
            </div>
            <label htmlFor="description" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Description*</label>
            <div className="relative mb-5 mt-2">
                
                <input onChange={(evt)=> setDescription(evt.target.value)} id="description" type="text" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Voxel is a Game Interactive Studio" required/>
            </div>
            <label htmlFor="funding" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Funding*</label>
            <div className="relative mb-5 mt-2">
                
                <input onChange={(evt)=> setFunding(evt.target.value)} id="funding" type="number" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="6900$" required/>
            </div>
            <label htmlFor="funding" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Investor*</label>
            <div className="relative mb-5 mt-2">
                
                <input onChange={(evt)=> setInvestor(evt.target.value)} id="funding" type="number" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Jeff Bezos" required/>
            </div>
            <label htmlFor="Industry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Industry*</label>
            <div className="relative mb-5 mt-2">
                
                <input onChange={(evt)=> setIndustry(evt.target.value)} id="Industry" type="text" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="IT" required />
            </div>
            <label htmlFor="City" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">City</label>
            <div className="relative mb-5 mt-2">
                
                <input id="City" onChange={(evt)=> setCity(evt.target.value)} type="text" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Bangalore" />
            </div>
            <div className="flex items-center justify-start w-full">
                <button type="submit" onClick={(evt)=>{
                    evt.preventDefault()
                    createStartup({name,description,date ,industry,funding, investor,city}, setOpen, setError)
                }} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={()=>setOpen(false)}>Cancel</button>
            </div></form>
            <button onClick={()=>setOpen(false)} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    </div>
</div>
</div>
}

async function createStartup(startup: {name:string,description:string,date: Date,industry: string, funding: number, investor: string, city: string}, setOpen: boolean, setError: boolean) {
    (startup.city ? null : startup.city = "?");
    (startup.industry ? null : startup.industry = "?");
    const addToServer = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addNew`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({startup })});
    const result = await addToServer.json();
    console.log(result)
    result ? setOpen(false) : setError(`Failed Adding Startup due to ${result}`);

}


export default function AddNew() {

    const [open, setOpen] = useState(false)

    if (open) {
        return (<PopupModal setOpen={setOpen}/>)
    } else {
        return     <button onClick={()=> { setOpen(true)}} className="relative">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black">Add New Startup</span>
    </button>
    }
    
}