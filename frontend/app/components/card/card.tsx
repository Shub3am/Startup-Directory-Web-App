import "./style.css"
export default function Card({ name, foundingYear, Funding, City}) {

    return <div  className="card mx-auto my-4">
    <div className="content">
      <div className="back">
        <div className="back-content">
        <p className="city">{name}</p>
    <p className="weather">Founded In {foundingYear}</p>
          <strong>Hover Me</strong>
          <div className="minmaxContainer">
      <div className="min">
        <p className="minHeading">Funding</p>
        <p className="minTemp">{Funding}$</p>
      </div>
      <div className="max">
        <p className="maxHeading">City</p>
        <p className="maxTemp">{City}</p>
      </div>
    </div>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">Pasta</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Spaguetti Bolognese</strong>
              </p>
              
            </div>
            <p className="card-footer">
              30 Mins &nbsp; | &nbsp; 1 Serving
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


}