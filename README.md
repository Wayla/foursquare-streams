# SYNOPSIS
A simple streaming abstraction for foursquare's REST APIs

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


## Installation

```js
$ npm install -g level-server
```

## License

(MIT)

Copyright (c) 2013 Wayla &lt;data@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
