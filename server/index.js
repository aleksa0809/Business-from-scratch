const data = require('./data.json')
const reg = /^\/api\/(\w+)(\/\w+)?(\/\w+)?/

require('http').createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const arr = reg.exec(req.url)
    console.log(arr)
    if(!arr) {res.end(JSON.stringify([])); return}
    let reply = []
    let [_, sector, size, color] = arr
    if(size) size = size.replace('/', '')
    if(color) color = color.replace('/', '')
    switch(sector){
        case 'toplist':
            reply = data.filter($=> $.toplist)
            break
        case 'casual':
        case 'lux':
            if(color) reply = data.filter($=> $.sector == sector && $.size == size && $.color == color)
            else reply = data.filter($=> $.sector == sector && $.size == size)
            break
        default:
            reply = []
    }
    res.end(JSON.stringify(reply));
}).listen(3001)
console.log('JSON can be fetched from http://localhost:3001')
