import Card from "./components/card/card"
import AddNew from "./addNew/page"
import Pagination from "./components/pagination/pagination"
type Schema = {
  ID: number, Name: string, Description: string, Founded: Date, Industry: string, City: string, Investor: string, Funding_Amount: number
}

async function getRecords(pageNo: number) {
  let res = await fetch(process.env.SERVER, {method: "POST", cache: "no-cache",headers: {"Content-Type": "application/json"}, body: JSON.stringify({page: pageNo})})
  let data = await res.json()
  return data
}

export default async function Home({searchParams}: {searchParams: {search: string | undefined, page: number | undefined}}) {
  //Default Page
  let pageNo = 0
  //for pagination
  if (searchParams.page && typeof Number(searchParams.page) == 'number' && searchParams.page > 0 ) {
    pageNo = Number(searchParams.page)
  }
  let data:[Schema] = await getRecords(pageNo)
  const Startup_Card = data.map( (single_startup: Schema) => { 
    let {ID, Name, Founded, City, Funding_Amount, Description, Industry} = single_startup
    
    let query = <div key={ID}><Card name={Name} foundingYear={Founded} Description={Description} Industry={Industry} City={City} Funding={Funding_Amount} /></div>
    //Search Parameters for Search Function, refer to component/Search

    //If Search query is there, return the item if matches
    if ( searchParams.search && searchParams.search.length && Name.toLowerCase().includes( searchParams.search.toLowerCase())) {
    return query }
    //If searchquery is undefined, return the item
    else if (searchParams.search == undefined) {
      return query 
    } //Otherwise It wont return anything if query doesnt match or query string is undefined
      
  })


  return (
    <main>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-3/4 m-auto">

{Startup_Card}</div>       <div className="flex justify-center w-3/4 m-auto">
      <Pagination/></div>
    </main>
  )
}
