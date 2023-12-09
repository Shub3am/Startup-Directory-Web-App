const express = require("express")
const app = express()
const sqlite3 = require('sqlite3').verbose();
const Seeder = require( "./seeder");

app.use(express.json());
Table = "STARTUP_DIRECTORY"
const db = new sqlite3.Database("./database/directory.db")

db.on("error", (err) => console.error(`Error Caused Due ${err}`)) // Throwing Error if trouble opening DB File

//Check Whether Database Exists, If not, seeds the Data
Seeder("./startup_funding.csv", Table, db) //Parameters: (CSV FILE, TABLE NAME, DB Connection)

app.get("/", (req,res)=> {
    db.all(`select * from ${Table}`, (err,rows)=> {
        err ? res.status(404).json(`Error Occured Due to ${err}`) : res.json(rows)
    })
})








app.listen(process.env.PORT || 8080, ()=> {
    console.log(`Server Started At ${process.env.PORT || 8080}`)
})