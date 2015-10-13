(function (root){
  var FILTER_EVENT = "FILTER_EVENT";
  var _filters = { bounds: {}, minSeating: 0, maxSeating: 20 };

  var resetFilter = function(newFilters) {
    _filters = $.extend(_filters, newFilters);
  };
  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    bounds: function(){
      return _filters.bounds;
    },
    
    minSeats: function(){
      return _filters.minSeating;
    },

    addUpdateSearchListener: function(callback) {
      this.on(FILTER_EVENT, callback);
    },

    removeUpdateSearchListener: function(callback) {
      this.on(FILTER_EVENT, callback);
    },

    DispatcherId: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case FilterConstants.FILTERS_RECEIVED:
        resetFilter(payload.filters);
        FilterStore.emit(FILTER_EVENT);
        break;
      }
    })
  });
})(this);
