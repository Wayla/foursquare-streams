
var querystring = require('querystring')
var hyperquest = require('hyperquest')
var JSONStream = require('JSONStream')
var through = require('through')
var mapStream = require('map-stream')

exports.createClient = function (opts) {

  if (!opts.clientId || !opts.clientSecret) {
    throw new Error('options object requires `clientId` and `clientSecret` members.')
  }

  var clientId = opts.clientId
  var clientSecret = opts.clientSecret
  var today = new Date()
  var month = today.getMonth() + 1

  if (month < 10) {
    month = '0' + month
  }

  var day = today.getDate()

  if (day < 10) {
    day = '0' + day
  }

  var date = today.getFullYear() + '' + month + '' + day

  var credentials = {
    'v': date,
    'client_id': clientId,
    'client_secret': clientSecret
  }

  var client = {}
  
  client.getVenues = function getVenues(params) {

    var url = [
      'https://api.foursquare.com/v2/venues/search?',
      querystring.stringify(params) + '&',
      querystring.stringify(credentials)
    ].join('')

    return hyperquest(url)
      .pipe(JSONStream.parse('response.venues.*'))
      .pipe(mapStream(function (venueRef, callback) {

        var that = this

        client.getVenue({
          venueId: venueRef.id
        }).pipe(through(function(venue) {
          callback(null, venue)
        }))
      }))
  }

  client.exploreVenues = function exploreVenues(params, callback) {
    
    var url = [
      'https://api.foursquare.com/v2/venues/explore?', 
      querystring.stringify(params) + '&',
      querystring.stringify(credentials)
    ].join('')

    return hyperquest(url).pipe(JSONStream.parse())
  }
 
  client.getVenue = function getVenue(params, callback) {
    
    var url = [
      'https://api.foursquare.com/v2/venues/',
      params.venueId + '?',
      querystring.stringify(credentials)
    ].join('')

    return hyperquest(url).pipe(JSONStream.parse())
  }

  return client
}
