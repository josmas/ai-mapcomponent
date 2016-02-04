# ai-mapcomponent
This repo hosts an early version of the html+javascript code that could power an App Inventor map component.

This component is an experiment, mostly to avoid extra work for App Inventor users.
The Google Maps Android API depends on the Play Services package, which is not currently provided by App Inventor.
Apps created with the API will also need, from the get go, an API key, that can be obtained by registering a project
through the developer console, but for many of our users, that process is rather complicated.
Using the JavaScript API, users may need an API key eventually, but not to start playing with the component.

Initially, the code was purposely built in one file, as it is loaded into
an Android WebView. This View has an interface for two way communication between
Java and JavaScript, so the JavaScript in this file can be augmented with values
from Java, and the Java side can also interact with the JavaScript.

At some point in 2016, I decided to use Grunt to build the unique file from a
series of modules using ES6 and babelify. I am still in the process of *moving around* all the code.

# Usage
At this stage the file mapComponent.html can be pasted into a webviewer-based component in App Inventor.
Note that the code in mapComponent.html has not been modified in a good a while.

Additionally, Grunt can be used to generate a unique JS file that contains the output of refactoring all the JS code
in mapComponent.html into different modules.
The file index-test.html can be used to test this new code. Work on this new code has only just started.

## Development
  1. Clone/Fork and `npm install`
  2. `grunt` will watch files for changes
  3. `grunt build` will build the final artifact (once) in the dist folder.

The code in this repo has to be matched with the App Inventor component [here](https://github.com/josmas/app-inventor/tree/webmap).
## TODOs:

    [] start pulling out code from the main mapComponent.html file into modules.
      [X] Android object file
      [] Map file: Separate...
        [] Markers
        [] List of Markers
        [X] Geolocation
        [X] Panning
        [] InfoWindows
      [X] Will markers be a part of Map or independent? Definitely independent. See above.
    [] come up with a way of generating a final html file with all the code inside, to paste in the Android component.

Jos - July 2o14 -- Feb 2o16
