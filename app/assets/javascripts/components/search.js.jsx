var Search = React.createClass({

  handleMapClick: function(e) {
    e.preventDefault();

  },

  render: function() {
    return(
      <div>
        <Index />
        <Map handleMapClick={this.handleMapClick} />
      </div>
    );
  }
});
