const data = require('./data.json')
const reg = /^\/api\/v1\/product\/(\w+)\/?(\w+)?\/?(\w+)?/

require('http').createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    //res.setHeader('Content-Type', 'application/json');
    const arr = reg.exec(req.url)
    console.log(arr)
    if(!arr) {
        res.writeHead(401, {'Content-Type': 'text/plain'});
        res.end('Bad request.') 
        return
    }
    let reply = []
    let [_, sector, size, color] = arr
    if(!['casual', 'lux', 'toplist'].includes(sector)) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('No such resource (sector).') 
        return
    }
    if(sector != 'toplist' && !['regular', 'large'].includes(size)) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('No such resource (size).') 
        return
    }
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
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(reply));
}).listen(3001)
console.log('JSON can be fetched from http://localhost:3001')
