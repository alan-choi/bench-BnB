// var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    name: '',
    seating: '0',
    description: '',
    lat: '',
    lng: ''
  },

  getInitialState: function(){
    return this.blankAttrs;
  },

  componentDidMount: function(){
    this.setState({
      lat: (this.props.location.query.lat || ''),
      lng: (this.props.location.query.lng || '')
     });
  },

  componentWillReceiveProps: function(newLocation) {
    this.setState({
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
     });
  },

  createBench: function(e){
    e.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function(key){
      bench[key] = this.state[key];
    }.bind(this));
    ApiUtil.createBench(bench);
    this.setState(this.blankAttrs);
    this.history.pushState(null, "/");
  },

  render: function(){
    return (
      <div>
        <form className="bench-form">
          <h4 className="bench-form-title">Post a Bench for Rent</h4>
          <div>
            <label>Name: </label>
            <input type="text" id="name" valueLink={this.linkState('name')}></input>
            <label> Seating: </label>
            <input type="number" id="seating" valueLink={this.linkState('seating')}></input>
            <br></br>
            <label type="text">Description:</label>
            <br></br>
            <input id="description" valueLink={this.linkState('description')}></input>
          </div>
          <div>
            <label>Lat: </label>
            <input type="number" step="any" id="lat" valueLink={this.linkState('lat')}></input>
            <label> Lng: </label>
            <input type="number" step="any" id="lng"valueLink={this.linkState('lng')}></input>
          </div>
          <button onClick={this.createBench}>Post Bench</button>
        </form>
      </div>
    );
  }
});
