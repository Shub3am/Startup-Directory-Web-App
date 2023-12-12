import Card from "./components/card/card"
import AddNew from "./addNew/page"

type Schema = {
  ID: number, Name: string, Description: string, Founded: Date, Industry: string, City: string, Investor: string, Funding_Amount: number
}

async function getRecords() {
  let res = await fetch(process.env.SERVER, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({page: 1})})
  let data = await res.json()
  return data
}

export default async function Home({searchParams}: {searchParams: {search: string | undefined}}) {
  let data:[Schema] = await getRecords()
  const Startup_Card = data.map( (single_startup: Schema) => { 
    let {ID, Name, Founded, City, Funding_Amount, Description, Industry} = single_startup
    
    let query = <div key={ID}><Card name={Name} foundingYear={Founded} Description={Description} Industry={Industry} City={City} Funding={Funding_Amount} /></div>
    if ( searchParams.search && searchParams.search.length && Name.includes( searchParams.search)) {
    return query }
    else if (searchParams.search == undefined) {
      return query 
    }
      
  })


  return (
    <main>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-3/4 m-auto">
{Startup_Card}</div>
    </main>
  )
}
