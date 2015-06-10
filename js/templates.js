angular.module("jslab.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("angular/content.html","<h1>Angular</h1>\n\n<p>\n  For many years, client-side JavaScript applications meant an ever-growing mess of jQuery spaghetti code. Now, there are many different JavaScript frameworks that can be used to create a more structured and maintainable single page application (SPA).\n</p>\n\n<p>\n  The first major JS framework was <a href=\"http://backbonejs.org/\">Backbone</a>. Backbone provided a Model-View-Controller (MVC) framework familiar to developers in other languages, such as Java. The MVC architecture allows you to define a JavaScript object that can be used as the model for your application. The controllers can manipulate the model programmatically while the view translates the model to the screen using templates and responds to DOM events from the browser. This was a huge leap forward in developing JavaScript apps, but you still had to manually keep the templates in sync with the changes to the model.\n</p>\n\n<p>\n  The next leap-forward in JavaScript MVC frameworks was two-way data binding. Two-way data binding automatically keeps the DOM and the application\'s models in sync. Any changes to the models from the controllers are automatically updated in the DOM. Also, any changes from the DOM such as user inputs are automatically applied to the model. The major frameworks that popularized two-way data binding are <a href=\"https://angularjs.org/\">Angular</a>, <a href=\"http://emberjs.com/\">Ember</a> and <a href=\"http://knockoutjs.com/\">Knockout</a>.\n</p>\n\n<jslab-tip>\nWith most modern JavaScript frameworks, including Angular, the need for jQuery has diminished. With jQuery apps, the DOM is the source of truth, while in an MVC framework the model is the source of truth. Instead of querying and manipulating the DOM directly, Angular apps should update the model instead. The DOM will automatically update using two-way data binding. If you find yourself frequently using jQuery to directly maniuplate the DOM in an Angular app, there is probably a better way to accomplish what you are trying to do.\n</jslab-tip>\n\n<p>\n  <a href=\"https://angularjs.org/\">Angular</a> is currently the <a href=\"http://www.improgrammer.net/wp-content/uploads/2015/03/Choosing-Javascript.jpg\">most popular</a> JavaScript MV* framework. It was originally developed at Google and describes itself as a MVW (Model-View-Whatever) framework. Angular provides a complete application ecosystem including data binding, routing, dependency injection, modules, unit testing, end-to-end testing and many other features.\n</p>\n\n<p>\n  Angular applications are usually bootstrapped in HTML by adding <a href=\"https://docs.angularjs.org/api/ng/directive/ngApp\">ng-app</a> to the element that contains your application. This element is commonly the body element or a container div, but can be any HTML element. With a simple case like the example here, an Angular application can be created without any JavaScript at all. But, we can do much more once we start writing some JavaScript.\n</p>\n\n<jslab-tip>\nWhen bootstrapping an Angular app, it\'s a good idea to use Strict Dependency Injection. This ensures that the application will work correclty with minification. To use strict DI, add the <code>ng-strict-di</code> directive to the same element as ng-app.\n</jslab-tip>\n");
$templateCache.put("angular/repl.html","<pre class=\"_cssdeck_embed\"\n	data-pane=\"html,output\"\n    data-href=\"bti360angular\">\n</pre>\n<script async src=\"js/cssdeck-embed.js\"></script>\n");
$templateCache.put("debugging/content.html","<h1>Debugging</h1>");
$templateCache.put("debugging/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360debugging\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("gotchas/content.html","<h1>Common Gotchas</h1>\n\n<section>\n	<h4>Not declaring variables with <code>var</code></h4>\n	<p>\n		Omitting the <code>var</code> when declaring a variable will make it global by default, which is rarely intended. Not\n		only do global variables pollute the global namespace, they can also result in hard-to-track bugs if the variable is\n		updated in different files. \n	</p>\n</section>\n\n<section>\n	<h4>Creating built-in objects with the <code>new</code> keyword</h4>\n	<p>\n		New JS developers will often create objects such as Array and Object with the new keyword (i.e. <code>var arr = \n		new Array()</code> and <code>var obj = new Object()</code>). These constructors are technically correct, but the preferred way is to use the object initializer version of each (i.e. <code>var arr = []</code> and <code>var obj = {}</code>). Not only are these more succinct, but in the case of the Array constructor, subtle differences arise in the way the constructor is used compared to the initializer (try passing an integer into new Array() and then inspect its length).\n	</p>\n</section>\n\n<section>\n	<h4>Using <code>==</code> instead of <code>===</code></h4>\n	<p>\n		There\'s rarely a good reason to use == instead of ===. The == operand attempts to coerce values of different type \n		into the same type so that they can be compared, whereas === requires that the operands be the same type and value. Instead of relying on ==\'s unreliable output (see code sidebar), use the safer and predictable ===.\n	</p>\n</section>\n\n<section>\n	<h4>Functions with long parameter lists</h4>\n	<p>\n		Inexperienced JS developers (or other language developers for that matter) tend to pile on function parameters when\n		creating or editing a function. They\'ll add \"just one more...\" parameter until the function is bloated with 8 possible\n		parameters. Furthermore, JavaScript allows you to call a function without passing in all of the parameters,\n		so developers will often add parameters to the end of the function to make them optional.\n	</p>\n	<p>\n		A cleaner and more maintainable implementation is to design the function to take in a parameter object that acts as\n		a key/value map for any desired parameters:\n\n<pre class=\"code-example\"><code>function doSomething(config) {\n  smallTask(config.x);     // defined elsewhere\n  anotherTask(config.y);\n}\n\nvar params = {\n  x: 42,\n  y: { /* some object key/values */ }\n};\ndoSomething(params);</code></pre>\n	\n	</p>\n\n	<jslab-tip>\n		It\'s a good idea to introduce a parameter object after you add a third or fourth parameter to a function. Two-parameter functions are fine, but you should start to feel uneasy if you often introduce more than that.\n	</jslab-tip>\n</section>\n\n<section>\n	<h4>eval</h4>\n	<p>\n		Just like ==, <code>eval</code> should almost never be used. There are a few downsides to eval\'ing code, but the most\n		important one is that it can compromise the security of your application. <code>eval</code> executes JS code in as a\n		String, so any String from untrusted sources that gets passed to the eval function could result in a security hole.\n	</p>\n</section>\n\n<section>\n	<h4>Strict Mode</h4>\n	<p>\n	  Strict mode should be declared by adding <code>\'use strict\';</code> to the beginning of either a JavaScript file or a function. The use strict expression was added in ECMAScript 5 and instructs the browser to run your code in strict mode. Strict mode makes writing JavaScript safer by turning bad syntax into errors. For example, you can\'t have undeclared variables in strict mode. This means that all variables must be created using a <code>var</code> statement. If you then mistype the name of the variable later, an error will be thrown as that mistyped variable hasn\'t been declared. Without strict mode, a new variable would be created without giving you any feedback that something was wrong. Other things such as using the <code>delete</code> and <code>with</code> statements are also prohibited.\n	</p>\n</section>\n\n<section>\n	<h3>References</h3>\n	<ul>\n		<li>Effective JavaScript: Item 52</li>\n		<li>Crockford, Douglas. JavaScript: The Good Parts. Appendix B.\n	</ul>\n</section>\n");
$templateCache.put("gotchas/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360gotchas\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("functions/content.html","<h1>Functions</h1>\n\n<p>\n	Understanding JavaScript functions, and the many ways they can be used, is one of the best ways to get your JS skills \n	to the next level.\n</p>\n\n<p>\n	There are a few different ways that you can define functions. We\'ll start with the simplest to understand, the regular\n	function declaration:\n</p>\n\n<pre class=\"code-example\">\nfunction add(x) {\n  return 4 + x;\n}\n</pre>\n\n<p>\n	We can call \"add\" elsewhere in our script with a single argument:\n</p>\n\n<pre>\n	add(3);\n</pre>\n\n<p>\n	This form of method declaration is usually best used in situations where you want to break up a larger function\'s\n	internals into separate private functions that won\'t be reused again:\n<p>\n\n<pre class=\"code-example\">\nfunction doALotOfThings() {\n  doA();\n  doB();\n\n  function doA() {\n    // code for doing \'A\'\n  }\n\n  function doB() {\n    // code for doing \'B\'\n  }\n\n}\n</pre>\n\n<jslab-warning>\n	Defining functions like this at the top level of a file or script block (i.e. not in an object or within another \n	function) will put the function under the global scope, which we generally want to avoid.\n</jslab-warning>\n\n<p>\n	The second way of declaring a function is on an object. This type of function is typically called a \"method\":\n<p>\n\n<pre class=\"code-example\">\nvar math = {\n  add: function(x) {\n    return 4 + x;\n  }\n};\n</pre>\n\n<p>\n	You\'ll find yourself declaring functions in this fashion often, since you\'ll either want to call a method on an\n	object or namespace functions so that they don\'t sit direction under the global namespace. To call the method above,\n	we execute it like so:\n</p>\n\n<pre>\n	math.add(3);\n</pre>\n\n<p>\n	The third way of declaring functions involves creating contructor functions. These functions allow us to create\n	and initialize JavaScript objects:\n</p>\n\n<pre class=\"code-example\">\nfunction Animal(name, type) {\n  this.name = name;\n  this.type = type;\n\n  this.sayHi = function() {\n    return \"Hi, I\'m \" + this.name + \" the \" + this.type;\n  }\n}\n</pre>\n\n<p>\n	Using this function, we can create Animal objects and use their methods to act on them. Constructors are special in \n	that you have to call it using the <code>new</code> keyword:\n</p>\n\n<pre class=\"code-example\">\nvar dumbo = new Animal(\"dumbo\", \"elephant\");\ndumbo.sayHi();\n</pre>\n\n<jslab-warning>\n	Forgetting the <code>new</code> keyword can result in creating an object where the <code>this</code> is bound to the\n	global scope <code>window</code> instead of a new object\'s scope. Make sure to always use <code>new</code>!\n</jslab-warning> \n\n");
$templateCache.put("functions/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360functions\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("home/content.html","<h1>JS Lab</h1>\n\n<p>\n  Welcome to the BTI360 JavaScript Lab. This is meant to serve as both an introduction for developers new to JavaScript and a refresher for experienced JavaScript developers.\n</p>\n\n<p>\n  This content of this application will guide you through various parts of JavaScript development, from vanilla JS to AngularJS. Each page has code examples, helpful tips and warnings that we\'ve gathered over the years and a live coding section. In the right colum of each page, there is example code in an embedded editor from <a href=\"http://cssdeck.com\">CSSDeck</a>. You can edit the code in the editor and the output will automatically display the resulting page.\n</p>\n\n<p>\n  Additionally, this application is built using AngularJS and is completely open source. Feel free to browse through the code on Github using the provided button. We hope that the code of this application can show you some best practices for creating Angular apps, including several other tools such as GulpJS, SCSS, Live Reload, JSHint, JSCS and Github Pages. We intend for this application to be updated periodically as new concepts are introduced. So, if you notice any issues or have any suggestions for how we can improve anything, please let us know by opening an issue on Github.\n</p>\n\n<p>\n  To get started with the lab, simply click on one of the links in the navigation.\n</p>");
$templateCache.put("home/repl.html","<div class=\"gh-link text-center center-block\">\n  <div class=\"btn btn-warning btn-lg btn-gh\">\n    <a href=\"https://github.com/bti360/jslab\">View code on Github</a>\n  </div>\n</div>\n");
$templateCache.put("objects/content.html","<h1>Objects</h1>\n\n<p>\n	JavaScript objects are a structure made up of key/value pairs. The keys are strings, and the values can be any \n	JavaScript value or object, including functions. Here is the simplest way to create an object:\n</p>\n\n<pre class=\"code-example\">\nvar obj = {};\n</pre>\n\n<p>This creates an empty object with default object properties. Let\'s look at a more interesting example:</p>\n\n<pre class=\"code-example\">\nvar obj = {\n  \"name\": \"Js Lab\",\n  \"numberOfChapters\": 6,\n  \"getAuthors\": function() {\n    return \"Ryan Brady & Kyle Roberts\"\n  }\n};\n</pre>\n\n<p>\n	The object above contains three properties of different types. We can read any of these properties by calling the\n	property on the object using either dot notation or bracket notation:\n</p>\n\n<pre class=\"code-example\">\nobj.name;\nobj[\'name\'];\n\nobj.numberOfChapters;\nobj[\'numberOfChapters\'];\n\nobj.getAuthors();\nobj[\'getAuthors\']();\n</pre>\n\n<p>\n	The dot notation is usually preferable due to its better readability, but the bracket notation can be useful if we\'re\n	calling the property with a variable string.\n</p>\n\n<p>\n	Objects can also be created by defining a function and then calling that function with the <code>new</code> keyword.\n	These types of functions are called constructor functions. The first letter of the function is typically capitalized\n	to denote that they are constructors:\n</p>\n\n<pre class=\"code-example\">\nfunction Animal() {\n  // initialization code\n}\nvar a = new Animal();   // creates a new Animal object\n</pre>\n\n<p>\n	While the object literal notation is useful for creating quick one-off objects, it\'s not as easy to use when dealing \n	with behaviors or inheritance. In general, use literals when you need to pass a map of information (and simple \n	behaviors) between functions, and constructor functions when you need to model anything more complicated.\n</p>\n\n<jslab-warning>\n	Built-in JS objects should rarely be called with the <code>new</code> keyword. See the <a ui-sref=\"gotchas\" \n	title=\"Gotchas\">Gotchas</a> \n	section for more info.\n</jslab-warning>\n\n<h3>References</h3>\n\n\n\n");
$templateCache.put("objects/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360objects\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("styling/content.html","<h1>Code Styling</h1>\n\n<h4>Quotes and Spaces</h4>\n<p>\n  The debate over quotes and spaces is one of the longest running in the JavaScript communtiy. It\'s not quite vim vs. emacs, but it\'s pretty close. The most important thing is to pick one style and stick with it in your entire project. As long as each developer uses the same style, either choice is valid. Most JavaScript developers seem to prefer single quotes and indentation using 2 spaces, so that is what we recommend.\n</p>\n<pre class=\"code-example\">\n//Do This\nvar name = \'John Doe\';\nfunction getName() {\n  return this.name; // 2 spaces indent\n}\n\n/Don\'t Do This\nvar name = \"John Doe\";\nfunction getName() {\n    return this.name; // Tab indent\n}\n</pre>\n\n<h4>Variable Declaration</h4>\n<p>\n  Only declare 1 variable per line and hoist variables to the top. Single variable declaration makes it much easier to remove or comment out a single variable later and hoisting makes the implicit hoisting that JavaScript does in the background explicit to make errors easier to see.\n</p>\n<pre class=\"code-example\">\n//Do This\nvar one = 1;\nvar two = 2;\n\n/Don\'t Do This\nvar one = 1,\n    two = 2;\n\nvar one = 1, two = 2;\n</pre>\n\n<h4>Semicolons</h4>\n<p>\n  Always use semicolons. Even though it is valid JavaScript to not use semicolons, the JavaScript interpreter will attempt to infer where the semicolons go if they are missing. This can cause issues in some cases, so always use the semicolons to make it explicit to the interpreter.\n</p>\n<pre class=\"code-example\">\n//Do This\nvar one = 1;\ngetName();\n\n/Don\'t Do This\nvar one = 1\ngetName()\n</pre>\n\n<h4>Naming</h4>\n<p>\n  Files, variables and functions should always use descriptive names. Prefer full, English nouns when naming variables and verbs when naming functions. For getter/setter functions, use get* and set* function names.\n</p>\n<pre class=\"code-example\">\n//Do This\nvar controller = {};\nvar height = 100;\nfunction getHeight() {\n}\n\n/Don\'t Do This\nvar ctrl = {};\nvar h = 100;\nfunction findHeight() {\n}\n</pre>\n\n<h4>Strict Mode</h4>\n<p>\n  As discussed on the <a ui-sref=\"gotchas\" title=\"Gotchas\">Gotchas</a> page, you should always use strict mode. To not conflict with other packages, prefer the non-global strict mode. After the strict mode statement, leave a single empty line.\n</p>\n<pre class=\"code-example\">\n//Do This\nfunction getHeight() {\n  \'use strict\';\n  \n  return this.height;\n}\n\n/Don\'t Do This\n\'use strict\';\n\nfucntion getHeight() {\n  return this.height;\n};\n</pre>");
$templateCache.put("styling/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360styling\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("angular/controllers/content.html","<h1>Angular Controllers</h1>\n\n<p>\n  Angular <a href=\"https://docs.angularjs.org/guide/controller\">controllers</a> are used to modify the model objects. Controllers can setup the inital state of the model, change the model as events happen and setup watchers on the model object. Controllers are created using the <code>.controller(name, [dependencies, function()])</code> function on the Angular module object. There are a few different ways to declare Angular components, but you should always use the strict dependency injection format to avoid any issues with minification.\n</p>\n\n<pre class=\"code-example\" ng-non-bindable>\n// mymodule-controller.js\n// Retrieve previously created module and create controller\nangular.module(\'myModule\')\n.controller(\'myController\', [\'dependency1\', \'dependency2\',\n  function(dependency1, dependency2) {\n    \'use strict\';\n\n    var myController = this;\n\n    myController.square = function(value) {\n      return value * value;\n    };\n  }\n]);\n\n//template.html\n<&zwj;div ng-controller=\"myController as myController\">\n  Square of <&zwj;input ng-model=\"number\"> = {{ myController.square(number) }}\n<&zwj;/div>\n</pre>\n\n<jslab-tip>\n  It\'s a good idea to create a variable for the controller and assign it to <code>this</code>. Each variable or function you want to expose on the controller object then gets added to that variable. When you reference the controller in your template or router, use the controllerAs syntax and use the same variable name. This will help avoid any questions about what is or is not available in the template.\n</jslab-tip>\n\n<jslab-warning>\n  Never directly query or manipulate the DOM in an Angular controller. Putting any DOM logic in a controller makes unit testing the controller much more difficult and violates the MVC pattern. To update the DOM from the controller, you should update the model which is data bound to the template. If you need manual DOM manipulation, you should use a <a ui-sref=\"angular-directives\" title=\"Angular Directives\">directive</a> instead. Additionally, you shouldn\'t make $http REST calls using controllers either. Any http calls should be made in a service or factory.\n</jslab-warning>\n");
$templateCache.put("angular/controllers/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360angular-controllers\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("angular/directives/content.html","<h1>Angular Directives</h1>\n\n<p>\n  Angular <a href=\"https://docs.angularjs.org/guide/directive\">directives</a> are used to attach new behavior to DOM elements or to create reusable components. Most of the commonly found Angular functions, such as ngModel, ngController, ngHide and ngShow are directives. Most of the features you will need in your application are already available using the built-in Angular directives. However, it may become necessary to create a custom directive. Directives are created using the <code>.directive(name, [dependencies, function()])</code> function on the Angular module object.\n</p>\n\n<pre class=\"code-example\">\n// mymodule-directive.js\n// Retrieve previously created module and create directive with no dependencies\nangular.module(\'myModule\')\n.directive(\'myDirective\', [function() {\n    \'use strict\';\n\n    return {\n      restrict: \'EA\', // Restrict to element and attribute,\n      tempalteUrl: \'template.html\',\n      scope: { // Create isolate scope\n        name: \'=\', // Bind to property in parent scope\n        age: @\', // Bind to evaluated value of a property in parent scope\n        update: \'&\' // Bind to function in parent scope\n      },\n      link: function(scope, element, attrs, controllers) {\n        // Setup any observers or watchers and do DOM manipulation here\n      }\n    }\n  }\n]);\n\n//template.html\n<&zwj;div ng-controller=\"myController as myController\">\n  <&zwj;!-- Use element syntax -->\n  <&zwj;my-directive name=\"myController.userName\" age=\"21\" update=\"myController.updateName(name)\">\n  <&zwj;/my-directive>\n\n  <&zwj;!-- Use attribute syntax -->\n  <&zwj;div my-directive name=\"myController.userName\" age=\"21\" update=\"myController.updateName(name)\">\n  <&zwj;/div>\n<&zwj;/div>\n</pre>\n\n<jslab-warning>\n  Don\'t create directives with single word names. To make sure your directives don\'t conflict with others, use the same namespace that is used throughout the rest of the application.\n</jslab-warning>\n\n<jslab-tip>\n  Declaring a scope variable in your directive creates an isolate scope that doesn\'t inherit from the parent scope. Data is then passed into the scope using HTML attributes when the directive is used. For scope variables using single word names is easier as it removes confusion over camel-case vs dashed names. Also, prefer having the attribute names in the template be the same as the scope variable name, so the shorthand scope syntax can be used.\n  <hr/>\n  Be cognizant of the difference between <code>=</code> and <code>@</code> in the isolate scope definition. The <code>=</code> binds the scope property to a property on the parent scope. The <code>@</code> binds the scope property to the evaluated value of the passed in DOM attribute. What this means is that the attribute value is alwyas a string and is necessitates using <code>$observe</code> in the link function if you want to respond to changes in the bound attribute.\n</jslab-tip>\n");
$templateCache.put("angular/directives/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360angular-directives\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("angular/modules/content.html","<h1>Angular Modules</h1>\n\n<p>\n  Angular applications use a module system to contain the different components of the application. The module system allows for both dependency injection and the single responsibility pattern of each component in a separate file.\n</p>\n\n<p>\n  Angular modules are defined using the <code>angular.module(name, [dependencies])</code> function. There are two ways to call this function. When the second parameter (dependencies) is passed to the function, it works as a setter function to create an Angular module. When the dependencies are omitted, the function works as a getter function to retrieve an existing Angular module.\n</p>\n\n<pre class=\"code-example\">\n// Create module named myModule\nangular.module(\'myModule\', [\'dependencies1\', \'dependencies2\']);\n\n// Retrieve previously created module\nangular.module(\'myModule\');\n\n// Create module without dependencies\nangular.module(\'otherModule\', []);\n</pre>\n\n<p>\n  Angular modules are also helpful in unit tests to only load the modules needed for the test.\n</p>\n\n<pre class=\"code-example\">\ndescribe(\'myModule tests\', function() {\n  // Load myModule module for testing\n  beforeEach(module(\'myModule\'));\n});\n</pre>\n\n<jslab-tip>\nFor each Angular application, you should create an application-level module that handles global dependencies. The application should be then be structured using a feature or pod structure where each feature of the app has its own folder and module. The modules should be namespaced under a common global name for your application. Additionally, each reusable component of the app, such as directives and services, should also have their own modules.\n</jslab-tip>\n\n<jslab-tip>\nEach file should contain a single component and should be named according to a common naming pattern, such as module-type.js. For example, the controller in the home module should be named home-controller.js. Unit test files should be placed along the source code with -test appended to the file name, such as home-controller-test.js. All file names should be lower cased, dasherized and descriptive.\n</jslab-tip>\n\n");
$templateCache.put("angular/modules/repl.html","<pre class=\"_cssdeck_embed\"\n	data-pane=\"js,output\"\n    data-href=\"bti360angular-modules\">\n</pre>\n<script async type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>\n");
$templateCache.put("angular/routing/content.html","<h1>Angular Routing</h1>\n\n<p>\n  Routing in Angular isn\'t handled by the core framework in Angular 1.x. Thus, there are several competing libraries that are used for routing. The core team created <a href=\"https://docs.angularjs.org/api/ngRoute\">ngRoute</a> for simple routing needs. For most larger applications, the currently preferred library is <a href=\"https://github.com/angular-ui/ui-router\">ui-router</a>. UI Router uses states instead of routes which allows for more complex behavior such as named, nested and parallel views.\n</p>\n\n<p>\n  To use UI Router, the <code>ui.router</code> module must be added to your application\'s dependencies.\n</p>\n\n<pre class=\"code-example\">\n// myrouter-module.js\n// Create module\nangular.module(\'myRoutingModule\', [\'ui.router\']);\n// mymodule-router.js\n// Retreive router moduleand configure states\nangular.module(\'myRoutingModule\')\n.config([\'$stateProvider\', \'$urlRouterProvider\',\n  function($stateProvider, $urlRouterProvider) {\n    \'use strict\';\n\n    // For any unmatched url, redirect to /home\n    $urlRouterProvider.otherwise(\"/home\");\n\n    $stateProvider\n      .state(\'home\', {\n        url: \"/home\",\n        templateUrl: \"home.html\"\n      })\n      .state(\'about\', {\n        url: \"/about\",\n        templateUrl: \"about.html\",\n        controller: \'myAboutController\',\n        controllerAs: \'myAboutController\'\n      })\n  }\n]);\n\n//index.html\n<&zwj;ul class=\"nav navmenu-nav\">\n<&zwj;li><&zwj;a ui-sref=\"home\" title=\"Home\">Home<&zwj;/a><&zwj;/li>\n<&zwj;li><&zwj;a ui-sref=\"about\" title=\"About Me\">About<&zwj;/a><&zwj;/li>\n<&zwj;/ul>\n</pre>\n\n<jslab-tip>\n  Create a separate module for the router in your Angular application. Only require ui.router on that module instead of on the global module. This will help isolate the routing code to enable easier migration to a different routing library in the future if needed.\n</jslab-tip>\n");
$templateCache.put("angular/routing/repl.html","<pre class=\"_cssdeck_embed\" \n	data-pane=\"js,output\" \n    data-href=\"bti360angular-routing\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>");
$templateCache.put("angular/services/content.html","<h1>Angular Services</h1>\n\n<p>\n  Angular <a href=\"https://docs.angularjs.org/guide/services\">services</a> are used for code reuse and integration with external services, such as REST APIs and third-party libraries. Confusingly, there are three types of services in Angular, services, factories and providers. To simplify things, we suggest always using the factory type. Services are created using the <code>.factory(name, [dependencies, function()])</code> function on the Angular module object.\n</p>\n\n<pre class=\"code-example\">\n// mymodule-service.js\n// Retrieve previously created module and create service\nangular.module(\'myModule\')\n.factory(\'MyService\', [\'$http\', \'$log\',\n  function($http, $log) {\n    \'use strict\';\n    \n    // Return factory object containing functions that are exposed on the service\n    return {\n      getFile: function(name) {\n        return $http.get(\'file/\' + name);\n      },\n      sendFile: function(name, file) {\n        return $http.post(\'file/\' + name, file);\n      }\n    };\n  }\n]);\n</pre>\n\n<jslab-tip>\n  Services are singletons that are lazily instantiated. This means that your application will only load the service when it\'s needed and will always return the same service every time. It\'s a good idea to wrap third-party libraries, such as <a href=\"http://d3js.org/\">D3</a> or <a href=\"https://lodash.com/\">Lodash</a>, in a service to enable easy mocking for testing and easy migration to other libraries in the future.\n</jslab-tip>\n");
$templateCache.put("angular/services/repl.html","<pre class=\"_cssdeck_embed\"\n	data-pane=\"js,output\"\n    data-href=\"bti360angular-services\">\n</pre>\n<script type=\"text/javascript\" src=\"js/cssdeck-embed.js\"></script>\n");
$templateCache.put("components/editor/editor.html","<div ui-ace=\"{\n  useWrapMode : true,\n  theme:\'monokai\',\n  mode: \'javascript\',\n  onLoad: aceLoaded,\n  onChange: aceChanged\n}\" ng-model=\"code\"></div>\n<hr/>\n<div>\n  <pre>\n    <span ng-repeat=\"row in results track by $index\">\n      {{$index + 1}}: {{row}}<br/>\n    </span>\n  </pre>\n</div>\n");
$templateCache.put("components/tip/tip.html","<p class=\"bg-info tip\">\n	<span class=\"fa fa-info-circle\"></span>&nbsp;\n	<span ng-transclude></span>\n</p>\n");
$templateCache.put("components/warning/warning.html","<p class=\"bg-warning warning\">\n	<span class=\"fa fa-exclamation-circle\"></span>&nbsp;\n	<span ng-transclude></span>\n</p>\n");}]);