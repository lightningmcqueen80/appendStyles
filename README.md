### Introduction

This small library is used to append CSS styles in the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) element.

### Files

##### Minified

Minified is a ready-to-use version. Denoted by the `.min` in the file name. It's basically the same thing but just no unnecessary characters, to improve the performance. 

You can use it in your userscript or project directly through [Github](https://raw.githubusercontent.com/lightningmcqueen80/appendStyles/main/appendStyles.min.js).

##### Unminified

Unminified is a version to edit, modify, or just simple clean code. It's the one with no `.min` in the file name.

You can use it in your userscript or project directly through [Github](https://raw.githubusercontent.com/lightningmcqueen80/appendStyles/main/appendStyles.js).

### Usage

Call the function, then pass the CSS style rules in the form of an array.

```javascript
const rules = [
   `.element { width: 200px; height: 200px; }`, 
    `#element { background-color: red; }`
];

appendStyles(rules);
```
### Issues

You can report any issues or any unexpected behavior in the [issues](https://github.com/lightningmcqueen80/appendStyles/issues) tab.

### Contributing

Contributing is always welcome, you can create a pull request to modify or extend the library, then submit it in the [Pull requests](https://github.com/lightningmcqueen80/appendStyles/pulls) tab.

### License

This library is licensed under the [MIT license](https://github.com/lightningmcqueen80/appendStyles/blob/main/LICENSE).
