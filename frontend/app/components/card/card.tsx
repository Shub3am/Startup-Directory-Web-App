import "./style.css"
export default function Card({ name, foundingYear, Funding, Description, City, Industry}) {

    return <div  className="card mx-auto my-4 capitalize">
    <div className="content">
      <div className="back">
        <div className="back-content">
        <p className="city">{name}</p>
    <p className="text-center">Founded<br/>{foundingYear}</p>
          <strong>Hover Me</strong>
          <div className="minmaxContainer">
      <div className="min">
        <p className="minHeading">Funding</p>
        <p className="minTemp">{Funding? Funding+'$' : "Unknown"}</p>
      </div>
      <div className="max">
        <p className="maxHeading">City</p>
        <p className="maxTemp">{City}</p>
      </div>
    </div>
        </div>
      </div>
      <div className="front">

  
        <div className="front-content">
          <small className="badge">About</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>{Description}</strong>
              </p>
              
            </div>
            <p className="card-footer">
              Industry: {Industry}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


}