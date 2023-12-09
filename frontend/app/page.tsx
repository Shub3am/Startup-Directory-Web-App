import Card from "./components/card/card"

async function getRecords() {
  let res = await fetch(process.env.SERVER_URL, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({page: 1})})
  let data = await res.json()
  return data
  
}


export default async function Home() {
  const data = await getRecords()
  const  Startup_Card = data.map( (single_startup: {ID: number, Name: string, Description: string, Founded: Date, Industry: string, City: string, Investor: string, Funding_Amount: number}) => {
    let {ID, Name, Founded, City, Funding_Amount} = single_startup
    return(<div key={ID}><Card name={Name} foundingYear={Founded} City={City} Funding={Funding_Amount} /></div>)

  })
  return (
    <main>

<header className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <label className="sr-only" htmlFor="search"> Search </label>

          <input
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search website..."
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >

          </button>
        </div>

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
    </div>
  </div>
</header>
<div className="grid grid-cols-4 justify-center w-3/4 m-auto">
{Startup_Card}</div>
{/* <Card/> */}
    </main>
  )
}
