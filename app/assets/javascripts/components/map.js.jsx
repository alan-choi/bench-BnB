var Map = React.createClass({
  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.784118, lng: -122.406435},
      zoom: 14
    };
    
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListner(this.addMarkers);
    this.map.addListener('idle', ApiUtil.fetchBenches);
  },

  addMarkers: function() {
    var benches = BenchStore.all();

    for (var i = 0; i < benches.length; i++) {
      var myLatLng = { lat: benches[i].lat, lng: benches[i].lng };
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: benches[i].name
      });
    }
  },

  render: function() {
    return(
      <div className="map" ref="map">
      </div>
    );
  }
});
