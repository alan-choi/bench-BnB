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
  }
};
