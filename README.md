# SYNOPSIS
A simple streaming API for foursquare's APIs

# DESCRIPTION
If you for some reason want to collect the garbage that is foursquare's 
data, but you want to do it with streams, here's a module for it. Zing!

# USAGE
```js
var fsconn = {
  clientId: '2DSWUN',
  clientSecret: 'YCSISJ'
}

var foursquare = require('foursquare-streams').createClient(fsconn)

var opts = {
  'near': 'NYC',
  'limit': 50,
}

foursquare.getVenues(opts).pipe(...) // pipe that stream, dog!
```
