
window.Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListner(this._onChange);
  },

  _onChange: function() {
    var benches = BenchStore.all();
    this.setState({ benches: benches });
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return (
        <ul className="bench-item">
          <li className="bench-name">{bench.name}</li>
          <li>{bench.description}</li>
          <li>{bench.seating}</li>
        </ul>
      );
    });
    return (
      <div className="bench-index">
        {benches}
      </div>
    );
  }
});
