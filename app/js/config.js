//configure the roues for the app
app.config(function($routeProvider) {
    $routeProvider. 
       when('/', {
         templateUrl: 'app/views/home.html',
         controller: 'potatoCtrl as ctrl'
       }).
       when('/:id', {
         templateUrl: 'app/views/post.html',
         controller: 'potatoCtrl as ctrl'
       }).
       otherwise({
         redirectTo: '/'
       });
});