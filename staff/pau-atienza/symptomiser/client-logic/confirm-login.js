require('commons/polyfills/string')
require('commons/polyfills/function')
const { utils: { call } } = require('commons')
const context = require('./context')

module.exports =  async function () {
    const { token } = this.storage
    
    if (!token) return false

    const { status } = await call('POST', `${this.API_URL}/admins/auth/confirm`, undefined, { 'Authorization': `Bearer ${token}` })
    
    return status === 200
}.bind(context)