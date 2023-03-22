(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function ()
        {
            // TODO: complete this method
            // hint: area = pi * radius^2
            //return; // TODO: return the proper value
            return Math.PI * Math.pow(circle.radius, 2)

            //console.log(circle.area)
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding == true) {
                console.log(Math.round(circle.getArea()));
            }
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();