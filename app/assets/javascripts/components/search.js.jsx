var Search = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return {
      bounds: FilterStore.bounds(),
      minSeating: '',
    };
  },

  componentDidMount: function() {
    FilterStore.addUpdateSearchListener(this.updateFilter);
  },

  handleMinChange: function(e) {
    var minSeating;
    if (e.target.value === '') {
      minSeating = 0;
      this.setState({minSeating: 0});
    } else {
      minSeating = e.target.value;
      this.setState({ minSeating: e.target.value});
    }

    FilterActions.updateFilter({ minSeating: e.target.value });

    ApiUtil.fetchBenches(this.state.bounds, minSeating);
  },

  updateFilter: function() {
    this.setState({bounds: FilterStore.bounds()});
  },

  render: function() {
    return(
      <div>
        <input type='number' onChange={this.handleMinChange}></input>
        <Index />
        <Map />
      </div>
    );
  }
});
