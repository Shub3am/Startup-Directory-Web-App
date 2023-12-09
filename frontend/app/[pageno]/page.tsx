import Card from "../components/card/card"

export default function Page({ params }: { params: { pageno: string } }) {
    
    const  Startup_Card = data.map( (single_startup: {ID: number, Name: string, Description: string, Founded: Date, Industry: string, City: string, Investor: string, Funding_Amount: number}) => {
        let {ID, Name, Founded, City, Funding_Amount} = single_startup
        return(<div key={ID}><Card name={Name} foundingYear={Founded} City={City} Funding={Funding_Amount} /></div>)
    
      })
    return <div><Startup_Card/></div>
  }