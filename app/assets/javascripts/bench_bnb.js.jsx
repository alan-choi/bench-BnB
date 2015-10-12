$(function(){
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}></IndexRoute>
        <Route
          path="benches/new"
          components={{index: Index, benchform: BenchForm, map: Map}} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
