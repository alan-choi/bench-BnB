FilterActions = {
  updateFilter: function(newFilters) {
    var payload = {
      actionType: FilterConstants.FILTERS_RECEIVED,
      filters: newFilters
    };
    AppDispatcher.dispatch(payload);
  }
};
