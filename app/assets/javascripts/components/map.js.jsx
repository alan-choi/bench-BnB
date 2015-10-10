var Map = React.createClass({
  getInitialState: function() {
    return { markers: [] };
  },

  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.784118, lng: -122.406435},
      zoom: 14
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', function () {
      var bounds = this.filterMapBounds();
      ApiUtil.fetchBenches(bounds);
    }.bind(this));
    BenchStore.addChangeListner(this.deleteMarkers);
    BenchStore.addChangeListner(this.addMarkers);
  },

  filterMapBounds: function() {
    var bounds = this.map.getBounds();
    var northEast = {lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng()};
    var southWest = {lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng()};
    var currentMapBounds = {northEast: northEast, southWest: southWest};
    return currentMapBounds;
  },

  createMarkers: function() {
    var benches = BenchStore.all();
    var markers = [];
    for (var i = 0; i < benches.length; i++) {
      var myLatLng = { lat: benches[i].lat, lng: benches[i].lng };
      var marker = new google.maps.Marker({
        position: myLatLng,
        title: benches[i].name
      });
      markers.push(marker);
    }
    this.setState({ markers: markers });
  },

  addMarkers: function() {
    this.createMarkers();
    var newMarkers = this.state.markers;
    for(var i = 0; i < newMarkers.length; i++) {
      newMarkers[i].setMap(this.map);
    }
  },

  deleteMarkers: function() {
    var currentMarkers = this.state.markers;
    if (currentMarkers !== undefined) {
      for (var i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].setMap(null);
      }
    }
    this.setState({ markers: currentMarkers });
  },

  render: function() {
    return(
      <div className="map" ref="map">
      </div>
    );
  }
});
