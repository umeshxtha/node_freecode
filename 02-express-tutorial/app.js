const { readFileSync } = require('fs');
const http = require('http')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server =  http.createServer((req,res)=>{
const url = req.url;
console.log(url)
// homepage
if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
}
// about us page 
else if (url == '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Welcome to about us page</h1>')
    res.end()
}
// styles
else if (url == '/styles.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
}
// logo svg
else if (url == '/logo.svg'){
    res.writeHead(200,{'content-type':'text/svg+xml'})
    res.write(homeImage)
    res.end()
}
else if (url == '/browser-app.js'){
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()
}
// page not found
else {
    res.writeHead(400,{'content-type':'text/html'})
    res.write('<h1>Page Not Found</h1>')
    res.end()
}
    
})


server.listen(5000);
