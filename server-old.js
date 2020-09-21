// const http2 = require ("http2")
// const fs = require("fs")

// const server = http2.createSecureServer({
//     "key": fs.readFileSync("localhost-private.pem"),
//     "cert": fs.readFileSync("localhost-cert.pem")
// })

// server.on("stream", (stream, headers) => {
//     console.log(stream.id);
//     stream.respond({
//         "content-type": "application/json",
//         "status": 200
//     })

//     stream.end(JSON.stringify({
//         "user": "Hussein",
//         "id": 823
//     }))
// })

// server.listen(443);
// console.log("listening on port 443");


require('dotenv').config()

const http2 = require('http2'),
  fs = require('fs')
  fetch = require('node-fetch'),
  hostname = '127.0.0.1',
  port = 3000,
  nrelAPIkey = process.env.NREL_API_KEY,
  solarURL = process.env.NREL_SOLAR_RESOURCE_DATA_URL

const server = http2.createSecureServer({
    "key": fs.readFileSync("localhost-private.pem"),
    "cert": fs.readFileSync("localhost-cert.pem")
})

const nrelFetch = (url, stream) => { // url, response
    fetch(url)
        .then(res => res.json())
        .then(json => {
            response.end(JSON.stringify(json))
        })
        .catch(err => {
            console.error(err)
        })
}

server.on("stream", (stream, headers) => {
      console.log(stream);
      stream.respond({
          "content-type": "application/json",
          "status": 200
      })
  
      stream.end(JSON.stringify({
          "user": "Hussein",
          "id": 823
      }))
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// const server = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') {
//         res.writeHead(200, {'Content-Type': 'image/x-icon'} )
//         res.end()
//         console.log('favicon requested')
//         return
//     }

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

//   try { 
//     nrelFetch(`${solarURL}?api_key=${nrelAPIkey}&lat=40&lon=-105`, res)
//   } catch (error) {
//     console.error(error)    
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });