//factory used to make GET request to Flickr
app.factory('getFlickrData', function($http){
    return{
        data:{},
        getData: function(){
            var self = this;
            return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=alll&format=json&jsoncallback=JSON_CALLBACK");
        }
    }
});
