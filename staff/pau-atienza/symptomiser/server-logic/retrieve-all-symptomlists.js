/**
 * retrieves all symptoms from the mongoDB database and sanitizes them
 * 
 */

const { models: { SymptomList }, cleanSymptomList } = require('data')

module.exports = ()=>{
    return SymptomList.find({}).populate('symptomList').lean().then(symptomList=>cleanSymptomList(symptomList))
}