const express = require("express")
const app = express()
const sqlite3 = require('sqlite3').verbose();
const Seeder = require( "./seeder");
const cors = require("cors")

app.use(cors())
app.use(express.json());
Table = "STARTUP_DIRECTORY"
const db = new sqlite3.Database("./database/directory.db")

db.on("error", (err) => console.error(`Error Caused Due ${err}`)) // Throwing Error if trouble opening DB File

//Check Whether Database Exists, If not, seeds the Data
Seeder("./startup_funding.csv", Table, db) //Parameters: (CSV FILE, TABLE NAME, DB Connection)

app.post("/", (req,res)=> {
    let pageNo = req.body.page
    query = `select * from ${Table}`

    //Returning Only 10 Records Per Page for SSR
    if(pageNo && pageNo > 1) {
        query += ` where id >= ${pageNo}0 and id <= ${pageNo+1}0 `
    } else if (pageNo && pageNo == 1) {
        query += ' where id >= 0 and id <= 10'
    }
    console.log(query)
    db.all(query, (err,rows)=> {
        err ? res.status(404).json(`Error Occured Due to ${err}`) : res.json(rows)
    }) 
})

app.post("/addNew", (req,res)=> {
    req.body.startup ? null : res.status(404).json("Data Missing")
    const startupData = req.body.startup
    startupData.funding = Number(startupData.funding)
    startupData['investmentType'] = "?"
    //schema of startupData: {name, description, funding, industry, city, date}
    Object.keys(startupData).forEach( item=> {
        (startupData[item] ? null : startupData[item] = '')
        startupData[`$${item}`] = startupData[item]
        delete startupData[item]
    })
    console.log(startupData, 'sdae')
    db.run(`INSERT INTO ${Table} VALUES(?, $name, $description, $founded, $industry, $funding, $investor, $investmentType, $city)`, startupData, (err, result)=> {
        console.log(err,result)
        (err ? res.json(err) : res.json(result))
    })




    // return res.json(true) | false
})



app.listen(process.env.PORT || 8080, ()=> {
    console.log(`Server Started At ${process.env.PORT || 8080}`)
})