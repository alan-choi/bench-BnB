ApiActions = {
  receiveAllBenches: function(benches) {
    var payload = {
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    };
    AppDispatcher.dispatch(payload);
  },

  addNewBench: function(bench) {
    var payload = {
      actionType: BenchConstants.ADD_BENCH,
      bench: bench
    };
    AppDispatcher.dispatch(payload);
  }

};
