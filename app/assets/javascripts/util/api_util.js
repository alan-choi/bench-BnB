ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: '/api/benches',
      type: 'get',
      dataType: 'json',
      success: function(benchData) {
        ApiActions.receiveAllBenches(benchData);
      }
    });
  }
};
