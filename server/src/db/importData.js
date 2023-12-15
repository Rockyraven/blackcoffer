// import  {jsonData}  from './data'
const jsonData = require('./data')
const Data = require('../models/Data');

const importData = async() => {
    try {
        await Data.create(jsonData);
        console.log("Database uploaded")
    } catch (error) {
        console.log(error)
    }
}
importData();