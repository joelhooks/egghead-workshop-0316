
## Up & Running
This project uses [node.js](http://nodejs.org/). You will need to install node. The `node -v` should be >= 4.0 and `npm -v` should be >= 3.0.

npm can be updated to latest using `npm install npm -g`. This might be required if you installed the node LTS 4.x version.
  
  We will need some global libraries.
  
  * `npm install -g gulp`
  * `npm install -g karma-cli`

With node and these global dependencies installed, run `npm install` from the project directory. This will install the local dependencies the project relies on.

Once npm has installed your dependencies, you can now run the build with the `npm start` command in the project directory. This launches a sequence of tasks and starts a local web server on port 3444 (http://localhost:3444).

Additionally, gulp is now watching the project for changes to files in the source directory.


### Cool Links!
* https://github.com/angular-ui/bootstrap/tree/master/src
* https://facebook.github.io/react/docs/thinking-in-react.html
* http://teropa.info/blog/2015/10/18/refactoring-angular-apps-to-components.html
* http://googletesting.blogspot.com/2010/07/code-coverage-goal-80-and-no-less.html
* https://egghead.io/articles/angularjs-core-services-directive-definition-object-and-ui-router-cheat-sheets