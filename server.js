// https://itnext.io/using-http-2-with-next-js-express-917791ca249b
require('dotenv').config()

const next = require('next'),
    express = require('express'),
    compression = require('compression'),
    spdy = require('spdy'),
    path = require('path'),
    fs = require('fs'),
    url = require('url')

const port = parseInt(process.env.PORT, 10) || 3000,
    dev = process.env.NODE_ENV !== 'production',
    nrelAPIkey = process.env.NREL_API_KEY,
    solarURL = process.env.NREL_SOLAR_RESOURCE_DATA_URL

const app = next({ dev }),
    handle = app.getRequestHandler()



const options = () => {
    if(process.env.NODE_ENV === 'development') {
        return {
            key: fs.readFileSync(path.join(__dirname, '/localhost-private.pem')),
            cert: fs.readFileSync(path.join(__dirname, '/localhost-cert.pem'))
        }
    } else 
        return null
}

const shouldCompress = (req, res) => {
    // don't compress responses asking explicitly not
    if (req.headers['x-no-compression']) {
        return false
    }

    // use compression filter function
    return compression.filter(req, res)
}

const nrelFetch = (url, response) => { // url, stream
    fetch(url)
        .then(res => res.json())
        .then(json => {
            return response.send(json)
        })
        .catch(err => {
            console.error(err)
        })
}

app.prepare().then(() => {
    // express setup
    const expressApp = express()

    // set up compression in express
    expressApp.use(compression({ filter: shouldCompress }))

    // declaring routes for our pages
    expressApp.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })
    expressApp.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query)
    })
    expressApp.get('/nrel', (req, res) => {
        const params = req.query
        console.log(req.query)
        try { 
            nrelFetch(`${solarURL}?api_key=${nrelAPIkey}&lat=${params.lat}&lon=${params.lon}`, res)
        } catch (error) {
            console.error(error)    
            return response.send({ error })
        }
    })

    // fallback all request to next request handler
    expressApp.all('*', (req, res) => {
        return handle(req, res)
    })

    // spdy setup
    spdy.createServer(options(), expressApp).listen(port, error => {
        if (error) {
          console.error(error)
          return process.exit(1)
        } else {
          console.log(`HTTP/2 server listening on port: ${port}`)
        }
    })
})