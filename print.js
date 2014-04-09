var colors = require('colors')

module.exports = function (data){
    if (typeof data === 'string'){
        console.log(data.red)
    }else{
        console.log(data)
    }
}
