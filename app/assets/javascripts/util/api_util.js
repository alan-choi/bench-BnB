ApiUtil = {
  fetchBenches: function(currentMapBounds){
    $.ajax({
      url: '/api/benches',
      type: 'get',
      dataType: 'json',
      data: {currentMapBounds: currentMapBounds},
      success: function(benchData) {
        ApiActions.receiveAllBenches(benchData);
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
  }
};
