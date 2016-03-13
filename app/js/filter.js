//regex filter for getting username
app.filter('regex', function() {
    return function(val){
    var regExp = /\(([^)]+)\)/,
        match = regExp.exec(val);
    if(match !== null)
        return match[1];
   };
})

//regex filter for truncating message
app.filter('truncate', function () {
    return function (text, end) {
        var length = 35,
            end = "...",
            check =  text.length <= length || text.length - end.length <= length,
            cut = String(text).substring(0, length-end.length) + end
        return check ? text : cut;
    };
});