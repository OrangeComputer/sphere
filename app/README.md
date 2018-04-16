```
/app <-- you are here
|
|main.js //  entry point for the application registered components
|           child components, libs and plugins are plugged in
|           to the Vue instance
|
|index.html // the final build is rendered here
|
|register.js // registration of components, childcomponents,
|               libraries and filters that are used globally.
|
|/assets|
|       | images etc
|
|/build |// the minified bundle transpiled from webpack
|        |
|       |build.js
|       |images
|
|/libs  |// libs that the app needs more control over most are node_modules
|       |
|
|/src   |// Vue components
|       |
|
|/store |// Vuex
|       |
|
|/styles|// Sass
|       |
x
```
