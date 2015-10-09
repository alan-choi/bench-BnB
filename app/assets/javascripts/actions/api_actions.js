ApiActions = {
  receiveAllBenches: function(benches) {
    var payload = {
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    };
    AppDispatcher.dispatch(payload);
  }
};
