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


<div className="grid grid-cols-4 justify-center w-3/4 m-auto">
{Startup_Card}</div>
    </main>
  )
}
