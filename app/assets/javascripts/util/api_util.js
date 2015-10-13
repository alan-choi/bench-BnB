ApiUtil = {
  fetchBenches: function(currentMapBounds, minSeats){
    
    $.ajax({
      url: '/api/benches',
      type: 'get',
      dataType: 'json',
      data: {bounds: currentMapBounds, min: minSeats },
      success: function(benchData) {
        ApiActions.receiveAllBenches(benchData);
        FilterActions.updateFilter({bounds: currentMapBounds});
      }
    });
  },

  createBench: function(newBenchData) {
    $.ajax({
      url: 'api/benches',
      type: 'POST',
      dataType: 'json',
      data: {bench: newBenchData},
      success: function(newBenchData) {
        ApiActions.addNewBench(newBenchData);
        console.log(newBenchData);
      }
    });
  },
};
