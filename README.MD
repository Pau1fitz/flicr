Instructions to run
-------------------
In the terminal navigate to the project directory

Install grunt - Installation instructions can be found here http://gruntjs.com/installing-grunt

Following this run `npm install` in the project

Run 'grunt' and open 'localhost:8000' in the browser of your choice


About
------

Use of grunt
------------
I set up grunt in this project both for development purposes, and to minify the css and javascript to be used in the final prodiction code. This minified code can be found in app/production/css && app/production/js. During development the live reload functionality provided is very convenient, and any errors in your code are flagged immediately. Grunt is an essential part of my developer toolkit.

Using 'this' instead of '$scope'
--------------------------------
Instead of using $scope I used 'this'. As explained in John Papa's Angular style guide it is better to use the controllerAs syntax when writing Angular code - https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#controllers

Performance/SEO improvements
----------------------------
In the controller you will see that I defined the variable of 'data.items.length' before the loop, and then used the variable in the loop constructor. As we are only looping over a small set of objects it will not make much of a difference to performance here, however when you are looping over larger data sets it is better to cache the value as a variable to improve performance. 
For SEO purposes I used one h1 tag, and used alt tags in the images, for both SEO and accesibilty reasons. Also, by minifying the css and javascript performance in page loading time is improved.

Lodash
------
I used lodash to remove duplicates from the API response. I could have written my own function to remove these duplicates, but felt it was a useful to demostrate that I am aware of the lodash library and the amazing tools that it provides out of the box. Also, as adhering to the guidelines, lodash is released under the weak copyleft MIT license.

Testing
-------
Unfortunately, I didn't have a chance to test this code. However if I was to test I would use protractor for end to end testing of my Angular code, and Karma for my unit tests.