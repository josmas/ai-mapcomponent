# ai-mapcomponent
An early version of the html+javascript that will power the App Inventor map
component.

I am trying to avoid all extra work for our users having to sign the app (needed
when using the Android SDK) and instead using the JavaScript API (it only needs
an API Key).

Initially, the code was purposely built in one file, as it will be loaded into
an Android WebView. This View has an interface for two way communication between
Java and JavaScript, so the JavaScript in this file can be augmented with values
from Java, and the Java side can also interact with the JavaScript.

At some point in 2016, I decided to use Grunt to build the unique file from a
series of modules using ES6 and babelify.

# Usage
At this stage the file mapComponent.html can be pasted into a webviewer in App Inventor (add link to branch for the component).

Additionally, Grunt can be used to generate a unique JS file that contains the
output of refactoring all the JS code in mapComponent.html into different
modules. The file index-test.html can be used to test this new code. Work on
this new code has only just started.

## TODOs:

    [] start pulling out code from the main mapComponent.html file into modules.
      [X] Android object file
      [] Map file: Separate...
        [] Markers
        [] List of Markers
        [] Geolocation
        [X] Panning
        [] InfoWindows
      [X] Will markers be a part of Map or independent? Definitely independent. See above.
    [] come up with a way of generating a final html file with all the code inside, to paste in the Android component.

jos - July 2o14 -- Feb 2016
