
require('commons/polyfills/string')
require('commons/polyfills/json')
require('commons/polyfills/array')
const context = require('./context')

module.exports = function(modifierName){
    
    String.validate.notVoid(modifierName)    
    
    const symptomToModify = JSON.parse(this.storage.symptomToModify)

    JSON.validateNotArray(symptomToModify)

    const { modifiers, term } =symptomToModify
 
    if (!modifiers || !modifiers.length) throw new Error("There are no modifiers to delete")

    Array.validate(modifiers)
    JSON.validateNotArray(term)

    const {HPO_id, name} = term

    String.validate.notVoid(HPO_id)
    String.validate.notVoid(name)

    const index = modifiers.findIndex(({name})=>name===modifierName)

    if (index !== -1){
        modifiers.splice(index, 1)

        if(!modifiers.length) delete symptomToModify.modifiers

        this.storage.symptomToModify = JSON.stringify(symptomToModify)
    } else throw new Error("This modifier does not exist")

    return symptomToModify
    
}.bind(context)