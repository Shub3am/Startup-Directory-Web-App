const csvParser = require("csv-parser");
const fs = require("fs");
const moment = require("moment")
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./utils/db/directory.db")

db.on("error", (err) => console.error(`Error Caused Due ${err}`)) // Throwing Error if trouble opening DB File


function Seeder(csvFile, Table, db) {
db.run(`CREATE TABLE IF NOT EXISTS ${Table} (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Description TEXT ,Founded TEXT NOT NULL, Industry TEXT NOT NULL ON CONFLICT REPLACE DEFAULT 'Unknown', Funding_Amount INTEGER NOT NULL ON CONFLICT REPLACE DEFAULT 'Unknown', Investor TEXT NOT NULL ON CONFLICT REPLACE DEFAULT 'Unknown', Investment_Type TEXT NOT NULL ON CONFLICT REPLACE DEFAULT 'Unknown', City TEXT NOT NULL ON CONFLICT REPLACE DEFAULT 'Unknown' )`)
db.all("SELECT * from STARTUP_DIRECTORY", (err, result)=> {
    if (!result.length && !err) {
        const parsedCSV = fs.createReadStream(csvFile).pipe(csvParser())

        parsedCSV.on("data", (data)=> {
            /* SCHEMA 
            SNo: '',
          Date: ,
          StartupName: ,
          IndustryVertical: '',
          SubVertical: '',
          CityLocation: '',
          InvestorsName: ,
          InvestmentType: ,
          AmountInUSD: ,
          Remarks: '' 
          */
        
            let {StartupName, IndustryVertical, SubVertical, CityLocation,   InvestorsName ,
                InvestmentType,
                AmountInUSD} = data
            let date = moment(data.Date, 'DD/MM/YYYY')
            date = date.format('YYYY-MM-DD')
            let dataValues = { $name: StartupName, $description: SubVertical, $founded: date, $industry: IndustryVertical, $funding: AmountInUSD,$investor: InvestorsName,$investmentType: InvestmentType , $city: CityLocation}
                Object.keys(dataValues).forEach(property=> {
                    if (!dataValues[property]) {
                        dataValues[property] = null
                    }
                })
            db.run(`INSERT INTO ${Table} VALUES(?, $name, $description, $founded, $industry, $funding, $investor, $investmentType, $city)`, dataValues)
        })

    } else {
        err ? console.error(err) : null
        
    }
})
}

Seeder("./utils/startup_funding.csv", "STARTUP_DIRECTORY",db)