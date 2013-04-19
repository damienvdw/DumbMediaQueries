# DumbMediaQueries
================

A quick experiment to find a way to bypass the viewport width issue on WebKit browser with scrollbar enabled.

## What are we trying to demonstrate ?

Simply put, the h1 color should change when the viewport width change :
- Red at and below 599px; 
- Purple at 600px;
- Blue at 601px and above;

Also we check with Javascript the width of the window ( using window.innerWidth and $(window).width() ), and when the result is equal to 600px we add a mark beside the result (the mark is "<==== ON TARGET").

On a perfect world, on every browser, when the h1 is purple at 600px: 
- the method "window.innerWidth" should return "600<==== ON TARGET";
- the method "$(window).width()" should return 600px (the width of the viewport) minus the width of the scrollbar, if any (which is around 15 - 20px depending of the OS and Browser used). If the width without scrollbar is still 600px, add the mark "<==== ON TARGET" ;

__* On Windows OS and on Mac OS (if you enable this setting "General>Show scroll bars: Always" or if you use an older version of the OS). I haven't checked on Linux OS but I expect the same behavior as Windows OS__

But, on __WebKit browsers with a real scrollbar *__ the media querie viewport width is calculated without the scollbar, this is technically incorrect according to [W3C's media queries specification](http://www.w3.org/TR/css3-mediaqueries/#width) (the MQ viewport width should be calculated with the scollbar width).

So in those browsers, even if the viewport width is of the good size (in our example 600px) and trigger the expected events in Javascript,  the media queries consider that the viewport is actualy shorter by the size of a scrollbar (as explained earlier, around 15-20px), so around 580-585px.

This could potentially create a lot of issues if for some reasons you tie Javascript behaviors to CSS style change on a breakpoint.


## index.html
_index.html_ show the default behavior of browsers without fix of any kind.

## withMQGenie.html
_withMQGenie.html_ use [mqGenie](https://github.com/stowball/mqGenie), a script form [Matt Stow](http://mattstow.com/your-media-queries-are-wrong-fix-them-with-viewport-genie-and-mqgenie.html). Simply put, mqGenie make every browser calculate their media queries without the scrollbar, as it is done with WebKit browsers.

## Conclusion 
Even if mqGenie is not a perfect solution, because it make all browsers behave incorrectly according to de W3C's specification, at least now, Javascript and CSS use the same viewport width on every browser.

A better solution would be to force WebKit browsers to behave according to the specification. 


