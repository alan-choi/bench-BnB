
window.Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    ApiUtil.fetchBenches();
    BenchStore.addChangeListner(this._onChange);
  },

  _onChange: function() {
    var benches = BenchStore.all();
    this.setState({ benches: benches });
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return <div>{bench.name}</div>;
    });
    return (
      <div>
        This is an Index!
        {benches}
      </div>
    );
  }
});
