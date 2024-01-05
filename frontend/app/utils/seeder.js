const csvParser = require("csv-parser");
const fs = require("fs");
const moment = require("moment")
const {prisma} = require("../db")



async function Seeder(csvFile) {
const checkData = await prisma.startups.count()
if (!checkData) {
        const parsedCSV = fs.createReadStream(csvFile).pipe(csvParser())

        parsedCSV.on("data", async (data)=> {
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
            
            let dataValues = { name: StartupName, description: SubVertical, founded: date, industry: IndustryVertical, funding: AmountInUSD,investor: InvestorsName,investmentType: InvestmentType , city: CityLocation}
            
                Object.keys(dataValues).forEach(property=> {
                        if (property == "funding" && dataValues[property] !== null) {
                            dataValues[property] = dataValues[property].replace(/,/g, "")
                        }
                    else if (!dataValues[property]) {
                        dataValues[property] = null
                    } 
        })
            await prisma.startups.create({data: {
                NAME: dataValues.name,
                DESCRIPTION: dataValues.description,
                FOUNDED: dataValues.founded,
                INDUSTRY: dataValues.industry,
                FUNDING_AMOUNT: (dataValues.funding) ? Number(dataValues.funding) : 0 ,
                INVESTOR: dataValues.investor,
                INVESTMENT_TYPE: dataValues.investmentType,
                CITY: dataValues.city
            }})
        })

    }
}


module.exports = Seeder("./app/utils/startup_funding.csv")