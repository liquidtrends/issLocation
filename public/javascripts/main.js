$.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
    var lat = data.iss_position.latitude;
    var lon = data.iss_position.longitude;
    $('#isslat').html(Math.round(lat*100)/1000000.0);
    $('#isslon').html(Math.round(lon*100)/1000000.0);
    console.log(data)

var map;
function initialize() {
  var latLon = new google.maps.LatLng(lat, lon);
  var mainMap = {
    zoom: 4,
    center: latLon,
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mainMap);

  var marker = new google.maps.Marker({
     
      position: latLon,
      map: map,
      icon: 'images/iss.png'
  });
// setInterval( function() { console.log(lat,lon); }, 5000 );


}

google.maps.event.addDomListener(window, 'load', initialize);

   
});