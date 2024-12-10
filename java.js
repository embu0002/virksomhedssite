function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(55.7114, 12.53014),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
